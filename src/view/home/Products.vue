<template>
  <div id="Products">
    <Breadcrumb :categorie="categorie" :product-detail="productDetail" />
    <div v-if="$route.path == '/Products'" class="flex">
      <div class="navigation">
        <div class="categories">Product Categories</div>
        <div class="group">
          <div
            v-for="(item, i) in gruop"
            :key="'item' + i"
            :class="{ click: i == index }"
            @click="getProduct(item, i)"
          >
            {{ item.categoryDesc }}
          </div>
          <!-- <div class="click">For her</div>
          <div>For him</div>
          <div>Vibrators</div>
          <div>Vibrators</div>
          <div>Vibrators</div>
          <div>Vibrators</div> -->
        </div>
      </div>
      <div class="detail">
        <div v-for="(product, i) in products" :key="'product' + i" class="product">
          <div class="hover" @click="getDetail(product.productId)">
            <img :src="product.productIconUrl" alt="" />
            <div class="name">{{ product.productName }}</div>
            <div class="desc">{{ product.productDesc }}</div>
            <div class="more" @click.stop="getDetail(product.productId)">VIEW MORE >></div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import apis from '@/network/orderApi'
export default {
  name: 'Products',
  components: { Breadcrumb },
  data() {
    return {
      index: null,
      // categoryDesc: null,
      categorie: {},
      productDetail: {},
      // gruop: ['For her', 'For him', 'Vibrators', 'Vibrators', 'Vibrators', 'Vibrators'],
      gruop: [],
      products: [],
      // products: [
      //   {
      //     img: require('@/assets/image/home/img_pr_01.webpp'),
      //     name: 'Kegel Ball',
      //     desc: 'Product description xxxxx,product description,xxxxxxxxxx',
      //   },
      //   {
      //     img: require('@/assets/image/home/img_pr_01.webpp'),
      //     name: 'Kegel Ball',
      //     desc: 'Product description xxxxx,product description,xxxxxxxxxx',
      //   },
      //   {
      //     img: require('@/assets/image/home/img_pr_01.webpp'),
      //     name: 'Kegel Ball',
      //     desc: 'Product description xxxxx,product description,xxxxxxxxxx',
      //   },
      //   {
      //     img: require('@/assets/image/home/img_pr_01.webpp'),
      //     name: 'Kegel Ball',
      //     desc: 'Product description xxxxx,product description,xxxxxxxxxx',
      //   },
      //   {
      //     img: require('@/assets/image/home/img_pr_01.webpp'),
      //     name: 'Kegel Ball',
      //     desc: 'Product description xxxxx,product description,xxxxxxxxxx',
      //   },
      //   {
      //     img: require('@/assets/image/home/img_pr_01.webpp'),
      //     name: 'Kegel Ball',
      //     desc: 'Product description xxxxx,product description,xxxxxxxxxx',
      //   },
      //   {
      //     img: require('@/assets/image/home/img_pr_01.webpp'),
      //     name: 'Kegel Ball',
      //     desc: 'Product description xxxxx,product description,xxxxxxxxxx',
      //   },
      // ],
    }
  },
  created() {
    if (this.$route.name === 'product detail') {
      this.$nextTick(() => {
        this.productDetail = {
          name: this.$route.query.productId,
          path: '/Products/ProductDetail',
        }
      })
    }
    if (this.$store.state.user.categories.length === 0) {
      this.getCategories()
    } else {
      this.index = 0
      this.$nextTick(() => {
        this.categorie = {
          name: this.$store.state.user.categories[0].categoryDesc,
          path: '/Products',
          index: 0,
        }
      })
      Object.assign(this.gruop, this.$store.state.user.categories)
      Object.assign(this.products, this.$store.state.user.products)
      this.$set(this.products)
      this.$set(this.gruop)
    }
  },
  methods: {
    getCategories() {
      apis
        .QueryProductCategories({})
        .then(({ data }) => {
          Object.assign(this.gruop, data.result)
          this.$set(this.gruop)
        })
        .catch(() => {})
    },
    getProduct(item, i) {
      this.categorie = {
        name: item.categoryDesc,
        path: '/Products',
        index: i,
      }
      this.index = i
      this.products = []
      apis
        .QueryProductListByCateId({
          categoryId: item.categoryId,
        })
        .then(({ data }) => {
          Object.assign(this.products, data.result)
          this.$set(this.products)
        })
        .catch(() => {})
    },
    getDetail(productId) {
      this.productDetail = {
        name: productId,
        path: '/Products/ProductDetail',
      }
      this.$router.push({
        path: '/Products/ProductDetail',
        query: {
          productId: productId,
        },
      })
    },
  },
}
</script>

<style lang="less" scoped>
#Products {
  // //width: 1200px;
  // padding: 0 360px;
  margin: auto;
  .flex {
    display: flex;
    justify-content: space-between;
    //width: 1200px;
    margin: 61px auto 232px;
    // margin-top: 97px;
    // margin-bottom: 232px;
    .navigation {
      .categories {
        font-family: Arial;
        font-size: 18px;
        font-weight: 900;
        color: #1d1d1f;
      }
      .group {
        margin-top: 25px;
        font-family: ArialMT;
        font-size: 14px;
        font-weight: normal;
        color: #86868b;
        text-decoration: underline;
        div {
          margin-bottom: 26px;
          cursor: pointer;
        }
        .click {
          color: #1d1d1f;
        }
      }
    }
    .detail {
      width: 1004px;

      .product {
        .hover {
          border: 1px solid transparent;
          height: 100%;
          position: relative;
          &:hover {
            border: 1px solid#ff4f8d;
          }
          > div {
            //   width: 236px;
            margin-left: 33px;
            text-align: left;
          }
        }
        margin-right: 16px;
        margin-bottom: 42px;
        width: 306px;
        height: 500px;
        text-align: center;
        float: left;

        .name {
          margin-top: 16px;
          font-family: ArialMT;
          font-size: 20px;
          font-weight: 900;
          color: #1d1d1f;
        }
        .desc {
          margin-top: 10px;
          font-family: ArialMT;
          font-size: 14px;
          font-weight: normal;
          color: #86868b;
        }
        .more {
          position: absolute;
          bottom: 0;
          cursor: pointer;
          margin-bottom: 42px;
          margin-top: 22px;
          border-radius: 20px;
          border: solid 1px #ff4f8d;
          width: 128px;
          height: 20px;
          line-height: 20px;
          text-align: center !important;
          font-family: ArialMT;
          font-size: 12px;
          font-weight: normal;
          color: #ff4f8d;
        }
      }
    }
  }
}
</style>
