<template>
  <div id="app">
    <NavTop :group="group" />
    <router-view />
    <NavBottom />
    <!-- <Myslide /> -->
  </div>
</template>

<script>
import NavTop from '@/components/NavTop-black'
import NavBottom from '@/components/NavBottom-black'
import apis from '@/network/orderApi'
// import Myslide from '@/components/Myslide'
export default {
  name: 'App',
  components: {
    NavTop,
    NavBottom,
    // Myslide,
  },
  data() {
    return {
      group: [],
    }
  },
  created() {
    if (this.$store.state.user.categories.length !== 0) {
      this.group = this.$store.state.user.categories
      // Object.assign(this.gruop, this.$store.state.user.categories)
    } else {
      this.getCategories()
    }
  },
  methods: {
    getCategories() {
      apis
        .QueryProductCategories({})
        .then(({ data }) => {
          this.$store.commit('user/updateState', {
            categories: data.result,
          })
          this.getProduct(data.result[0].categoryId)
          Object.assign(this.group, data.result)
          this.$set(this.group)
        })
        .catch(() => {})
    },
    getProduct(categoryId) {
      apis
        .QueryProductListByCateId({
          categoryId: categoryId,
        })
        .then(({ data }) => {
          this.$store.commit('user/updateState', {
            products: data.result,
          })
          // Object.assign(this.products, data.result)
          // this.$set(this.products)
        })
        .catch(() => {})
    },
  },
}
</script>

<style>
body {
  margin: 0;
}
</style>
