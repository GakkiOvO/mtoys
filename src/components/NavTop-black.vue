<template>
  <header id="NavTop">
    <div class="content">
      <img class="icon" src="@/assets/image/home/icon_main.png" alt="" @click="open = true" />
      <div class="logo">
        <img src="@/assets/image/home/logo.png" alt="" />
      </div>
      <img
        v-show="open"
        class="close"
        src="@/assets/image/home/btn_close2.png"
        alt=""
        @click="open = false"
      />
      <mu-drawer :open.sync="open" :docked="false">
        <div class="menu">
          <div :class="['name', { click: selectType === 'Home' }]" @click.stop="select('Home')">
            HOME
          </div>
          <div class="underline"></div>
          <div
            :class="['name', { click: selectType === 'Products' }]"
            @click.stop="select('Products')"
          >
            PRODUCTS
            <div class="group">
              <div
                v-for="(item, i) in group"
                :key="'item' + i"
                :class="{ click: i == index }"
                @click.stop="getProduct(item, i)"
              >
                {{ item.categoryDesc }}
              </div>
            </div>
          </div>
          <div class="underline"></div>
          <div
            :class="['name', { click: selectType === 'Profiles' }]"
            @click.stop="select('Profiles')"
          >
            PROFILES
          </div>
          <div class="underline"></div>
          <div
            :class="['name', { click: selectType === 'Contact' }]"
            @click.stop="select('Contact')"
          >
            CONTACT US
          </div>
        </div>
      </mu-drawer>
    </div>
    <!-- <Breadcrumb /> -->
  </header>
</template>

<script>
// import Breadcrumb from './Breadcrumb'
export default {
  name: 'Head',
  props: {
    group: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
  // components: { Breadcrumb },
  data() {
    return {
      index: null,
      selectType: null,
      open: false,
      categorie: {},
      products: [],
    }
  },
  watch: {
    $route(val) {
      if (val.name === 'product detail') this.selectType = 'products'
    },
  },
  methods: {
    getProduct(item, i) {
      this.selectType = 'Products'
      this.open = false
      // document.getElementById(type).scrollIntoView({ block: 'start', behavior: 'smooth' })
      if (this.index !== i) {
        this.$router.push({
          path: '/Products',
          query: {
            item: JSON.stringify(item),
            i,
          },
        })
      }
      this.index = i
    },
    select(type) {
      this.selectType = type
      this.open = false
      // document.getElementById(type).scrollIntoView({ block: 'start', behavior: 'smooth' })
      if (this.$route.name != type.toLowerCase()) {
        if (type === 'Products') {
          this.getProduct(this.group[0], 0)
        } else {
          this.index = null
          this.$router.push({
            path: `/${type}`,
          })
        }
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
    .close {
      position: absolute;
      top: 160px;
      right: 95px;
      width: 31px;
      height: 30px;
    }
    .menu {
      // padding-left: 433px;
      border: none;
      .name {
        // margin-top: 27px;
        padding: 77px 0 56px 40px;
        font-family: 'ArialMT', 'Arial', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 36px;
        color: #929292;
        // line-height: 36px;

        &.click {
          // font-size: 18px;
          color: #1d1d1f;
        }
        .group {
          padding: 73px 0 0 39px;
          font-family: ArialMT;
          font-size: 32px;
          font-weight: normal;
          color: #1d1d1f;
          > div {
            padding-bottom: 80px;
            text-decoration: underline;
            color: #86868b;
            &:last-child {
              padding-bottom: 32px;
            }
          }
          .click {
            color: #1d1d1f;
          }
        }
      }
      .underline {
        margin-left: 40px;
        border-bottom: 1px solid #bdbdc3;
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
