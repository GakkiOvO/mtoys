<template>
  <header id="NavTop">
    <div class="content">
      <img class="icon" src="@/assets/image/home/icon_main.png" alt="" @click="open = true" />
      <div class="logo">
        <img src="@/assets/image/home/logo.png" alt="" />
      </div>
      <!-- <div class="menu">
        <div :class="['name', { click: selectType === 'home' }]" @click.stop="select('home')">
          HOME
        </div>
        <div
          :class="['name', { click: selectType === 'products' }]"
          @click.stop="select('products')"
        >
          PRODUCTS
        </div>
        <div
          :class="['name', { click: selectType === 'profiles' }]"
          @click.stop="select('profiles')"
        >
          PROFILES
        </div>
        <div :class="['name', { click: selectType === 'contact' }]" @click.stop="select('contact')">
          CONTACT US
        </div>
      </div> -->
      <mu-drawer :open.sync="open" :docked="false">
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title>Menu Item 1</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Menu Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button @click="open = false">
            <mu-list-item-title>Close</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-drawer>
    </div>
    <!-- <Breadcrumb /> -->
  </header>
</template>

<script>
// import Breadcrumb from './Breadcrumb'
export default {
  name: 'Head',
  // components: { Breadcrumb },
  data() {
    return {
      selectType: null,
      open: false,
    }
  },
  watch: {
    $route(val) {
      if (val.name === 'product detail') this.selectType = 'products'
    },
  },
  methods: {
    select(type) {
      this.selectType = type
      if (this.$router.history.current.name != type) {
        this.$router.push({
          name: type,
        })
      }
    },
  },
}
</script>

<style lang="less" scoped>
#NavTop {
  background-color: #1d1d1f;
  position: fixed;
  width: 100%;
  z-index: 10;
  .content {
    height: 136px;
    // padding: 18px 0;
    display: flex;
    .icon {
      position: absolute;
      top: 56px;
      left: 27px;
      width: 29px;
      height: 27px;
      color: #ffffff;
    }
    .logo {
      // padding-left: 16px;
      margin: auto;
      > img {
        width: 190px;
        height: 101px;
        object-fit: contain;
      }
    }
    .menu {
      // padding-left: 433px;
      display: flex;
      border: none;
      .name {
        margin: auto;
        // margin-top: 27px;
        width: 152px;
        border-bottom: 1px solid #1d1d1f;
        text-align: center;
        font-family: 'ArialMT', 'Arial', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 18px;
        color: #f5f5f7;
        // background-color: rgba(255, 255, 255, 1);
        box-shadow: 5px 0 5px #1d1d1f;
        cursor: pointer;
        &.click {
          // font-size: 18px;
          box-shadow: 5px 0 5px #1d1d1f, 0px 5px 5px 0px #1d1d1f inset;
          color: #929292;
        }
      }
    }
  }
  .ax-default {
    font-family: 'ArialMT', 'Arial', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    letter-spacing: normal;
    color: #333333;
    vertical-align: none;
    line-height: normal;
    text-transform: none;
  }
  .mu-drawer {
    top: 136px;
    z-index: 9 !important;
  }
  .mu-drawer.is-open {
    width: 592px;
  }
}
</style>
