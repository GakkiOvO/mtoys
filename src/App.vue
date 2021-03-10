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
    apis
      .QueryProductCategories({})
      .then(({ data }) => {
        Object.assign(this.group, data.result)
        this.$set(this.group)
      })
      .catch(() => {})
  },
  // mounted() {
  //   var param = {
  //     // header: {
  //     //   'Content-Type': 'application/json;charset=utf-8',
  //     //   'Cache-Control': 'no-cache',
  //     //   'Access-Control-Expose-Headers': 'RetStatus',
  //     // },
  //     callbackParamter: 'callback',
  //     callback: 'callback_success',
  //   }
  //   this.$jsonp('https://api.adultlovetoys.net/lovetoys-api/queryProductCategories', param)
  //     .then((json) => {
  //       console.log(json, 111)
  //     })
  //     .catch((err) => {
  //       console.log(err, 222)
  //     })
  // },
}
</script>

<style>
body {
  margin: 0;
}
</style>
