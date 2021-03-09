<template>
  <header id="NavTop">
    <div class="logo">
      <img src="@/assets/image/home/u59.webp" alt="" />
      <span class="title">Shenzhen Warmdoll Model Co., Ltd.</span>
    </div>
    <div class="menu">
      <div :class="['name', { click: selectType === 'home' }]" @click.stop="select('home')">
        home
      </div>
      <div :class="['name', { click: selectType === 'products' }]" @click.stop="select('products')">
        products
      </div>
      <div :class="['name', { click: selectType === 'profiles' }]" @click.stop="select('profiles')">
        profiles
      </div>
      <div :class="['name', { click: selectType === 'contact' }]" @click.stop="select('contact')">
        contact us
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Head',
  components: {},
  data() {
    return {
      selectType: null,
    }
  },
  methods: {
    select(type) {
      this.selectType = type
    },
  },
}
</script>

<style lang="less" scoped>
#NavTop {
  .logo {
    padding: 16px 0 0 72px;
    display: flex;
    margin-bottom: 16px;
    img {
      width: 246px;
      height: 79px;
    }
    .title {
      font-family: 'ArialMT', 'Arial Bold', 'Arial', sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 24px;
      margin: auto 0 auto 200px;
    }
  }
  .menu {
    padding-left: 72px;
    display: flex;
    height: 58px;
    line-height: 58px;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    .name {
      width: 152px;
      border-bottom: 1px solid #00000059;
      text-align: center;
      font-family: 'ArialMT', 'Arial', sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 13px;
      color: #333333;
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 5px 0 5px #00000059;
      cursor: pointer;
      &.click {
        font-size: 18px;
        box-shadow: 5px 0 5px #00000059, 0px 5px 5px 0px #00000059 inset;
      }
    }
  }
  .ax-default {
    font-family: 'ArialMT', 'Arial', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    letter-spacing: normal;
    color: #333333;
    vertical-align: none;
    line-height: normal;
    text-transform: none;
  }
}
</style>
