<template>
  <div id="Head">
    <div class="title" :style="styles">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="less" scoped>
#Head {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  .title {
    height: 46px;
    line-height: 46px;
    text-align: center;
    font-family: Kanit;
    font-size: 20px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #4b4b4b;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px #333333;
  }
}
</style>
