<template>
  <div v-if="$route.name !== 'home'" id="Breadcrumb">
    <div v-for="(item, i) in crumbList" :key="i" class="item">
      <div :class="{ click: i === crumbList.length - 1 }" @click="push(item.path)">
        {{ item.name }}
      </div>
      <div v-if="i != crumbList.length - 1" style="padding: 0 16px">></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    categorie: {
      type: Object,
      default: () => {},
    },
    productDetail: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      crumbList: [
        {
          name: 'Home',
          path: '/Home',
        },
        {
          name: 'Products',
          path: '/Products',
        },
      ],
    }
  },
  watch: {
    crumbList() {
      if (this.crumbList.length > 4) this.crumbList.pop()
      if (this.crumbList.length === 4 && !this.crumbList[3].name) this.crumbList.pop()
    },
    categorie(val) {
      if (this.crumbList.length === 3) this.crumbList.pop()
      this.crumbList.push(val)
      this.$store.commit('user/updateState', {
        categorie: val,
      })
    },
    productDetail(val) {
      if (this.crumbList.length === 4) this.crumbList.pop()
      this.crumbList.push(val)
      this.$store.commit('user/updateState', {
        productDetail: val,
      })
    },
  },
  mounted() {
    if (this.$store.state.user.categorie) {
      this.crumbList.push(this.$store.state.user.categorie)
    }
  },
  methods: {
    push(path) {
      if (this.$route.fullPath != path && path !== '/Products') {
        this.$router.push({
          path: path,
        })
        this.crumbList.pop()
      }
    },
  },
}
</script>

<style lang="less" scoped>
#Breadcrumb {
  margin: 36px 0 0 28px;
  display: flex;
  //width: 1200px;
  background: #ffffff;
  font-family: ArialMT;
  font-size: 14px;
  font-weight: normal;
  color: #86868b;
  .item {
    max-width: max-content;
    cursor: pointer;
    display: flex;
    .click {
      color: #1d1d1f;
    }
  }
}
</style>
