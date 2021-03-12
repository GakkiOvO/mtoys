<template>
  <div id="Home">
    <section class="swiper">
      <Homeslide ref="child" />
    </section>
    <section id="product" class="product">
      <div class="title bottom">
        PRODUCT
        <p>CATEGORY</p>
      </div>
      <div class="context">
        <div class="item">
          <div
            v-for="(porduct, i) in records_her"
            :key="'i1' + i"
            class="porduct"
            @click="getDetail(porduct.productId)"
          >
            <img class="porduct-img" :src="porduct.img" />
            <div class="name">{{ porduct.name }}</div>
            <div class="more" @click.stop="getDetail(porduct.productId)">VIEW MORE >></div>
          </div>
          <div class="her">
            <img src="@/assets/image/home/img_her.webp" />
            <div style="position: absolute; bottom: 35px">
              <div class="alt">FOR HER</div>
            </div>
          </div>
        </div>
      </div>
      <div class="context">
        <div class="item">
          <div class="her">
            <img src="@/assets/image/home/img_him.webp" />
            <div style="position: absolute; bottom: 35px">
              <div class="alt">FOR HIM</div>
            </div>
          </div>
          <div v-for="(porduct, i) in records_him" :key="'i2' + i" class="porduct">
            <img :src="porduct.img" />
            <div class="name">{{ porduct.name }}</div>
            <div class="more" @click="getDetail(porduct.productId)">VIEW MORE >></div>
          </div>
        </div>
      </div>
    </section>
    <Profile />
    <Contact @pauses="pause" @resumes="resume" />
    <!-- <section class="profile">
      <div class="title">PROFILE</div>
      <div class="context">
        <img src="@/assets/image/home/img_profile.webp" alt="" />
        <div class="tip">
          "Founded in 2015, Shenzhen Warmdoll Model Co., Ltd. is a designer and producer of adult
          products for people of all shapes and sizes. We have a full selection of small vibrators,
          massagers, vibrating eggs, dildos, anal plugs, and much more. Whether you are looking to
          keep things interesting in your relationship or explore your own needs, we offer
          everything you can think of to liven up your sex life. <br /><br /><br />
          Our factory is located in Dongguan, Guangdong and we have more than 100 highly skilled
          employees. We can provide complete independent processing for sex toy production,
          including pre-design, mold opening, and injection molding."
        </div>
      </div>
      <div class="ce">
        <div>
          <img src="@/assets/image/home/icon_ce.png" />
          <div class="ce-title">Quality assurance</div>
          <div>Strictly comply with CE standards.</div>
        </div>
        <div>
          <img src="@/assets/image/home/icon_fast.png" />
          <div class="ce-title">Deliver fast</div>
          <div style="width: 209px">Our average delivery time is 7-25 days</div>
        </div>
        <div>
          <img src="@/assets/image/home/icon_word.png" />
          <div class="ce-title">Customer service</div>
          <div style="width: 276px">Our customers come from all over the world.</div>
        </div>
      </div>
    </section> -->
    <!-- <section class="contact">
      <div class="title">CONTACT US</div>
      <div class="method">
        <div class="qr">
          <img class="face" width="60" height="60" src="@/assets/image/home/icon_face.png" />
          <div class="Echo">Echo</div>
          <img src="@/assets/image/home/img_ewm.webp" />
        </div>
        <div class="qr">
          <img class="face" width="60" height="60" src="@/assets/image/home/icon_face.png" />
          <div class="Echo">Echo</div>
          <img src="@/assets/image/home/img_ewm.webp" />
        </div>
        <div class="submit">
          <div class="flex">
            <div class="field">Your email:</div>
            <input v-model="user.email" type="text" @focus="pause" @blur="resume" />
          </div>
          <div class="field message">Message:</div>
          <textarea v-model="user.message" type="text" @focus="pause" @blur="resume" />
          <div class="button" @click.stop="ContactUs()"><div>SUBMIT</div></div>
        </div>
      </div>
    </section> -->
    <!-- <Popup v-show="show" @close="show = false" /> -->
  </div>
</template>

<script>
import Homeslide from '@/components/Homeslide'
// import Popup from '@/components/Popup'
import apis from '@/network/orderApi'
import Profile from '@/components/Profiles'
import Contact from '@/components/Contact'
export default {
  name: 'Confirmation',
  components: {
    Homeslide,
    // Popup,
    Profile,
    Contact,
  },
  data() {
    return {
      // show: false,
      user: {
        email: null,
        message: null,
      },
      records_her: [
        {
          img: 'https://lovetoys-imgs.s3.us-east-2.amazonaws.com/lovetoys2/0046/0046-1.webp',
          name: 'A00001-0046',
          productId: '0046',
        },
        {
          img: 'https://lovetoys-imgs.s3.us-east-2.amazonaws.com/lovetoys2/0053/0053-1.webp',
          name: 'A00001-0053',
          productId: '0053',
        },
        {
          img: 'https://lovetoys-imgs.s3.us-east-2.amazonaws.com/lovetoys2/0054/0054-1.webp',
          name: 'A00001-0054',
          productId: '0054',
        },
      ],
      records_him: [
        {
          img: 'https://lovetoys-imgs.s3.us-east-2.amazonaws.com/lovetoys2/0442/0442-1.webp',
          name: 'A00001-0442',
          productId: '0442',
        },
        {
          img: 'https://lovetoys-imgs.s3.us-east-2.amazonaws.com/lovetoys2/0608/0608-1.webp',
          name: 'A00001-0608',
          productId: '0608',
        },
        {
          img: 'https://lovetoys-imgs.s3.us-east-2.amazonaws.com/lovetoys2/0413/0413-1.webp',
          name: 'A00001-0413',
          productId: '0413',
        },
      ],
    }
  },
  // created() {
  //   // this.ContactUs()
  //   if (this.$store.state.user.categories.length === 0) {
  //     this.show = true
  //     this.getCategories()
  //   } else {
  //     this.show = false
  //   }
  // },

  methods: {
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
    getCategories() {
      apis
        .QueryProductCategories({})
        .then(({ data }) => {
          this.$store.commit('user/updateState', {
            categories: data.result,
          })
          this.getProduct(data.result[0].categoryId)
          // Object.assign(this.gruop, data.result)
          // this.$set(this.gruop)
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
    pause() {
      this.$refs.child.pause()
    },
    resume() {
      this.$refs.child.resume()
    },
    //   ContactUs() {
    //     if (this.user.email && this.user.message) {
    //       apis
    //         .ContactUs({
    //           email: this.user.email,
    //           message: this.user.message,
    //         })
    //         .then(() => {
    //           this.user.email = null
    //           this.user.message = null
    //           this.$message.success('Send Email success!')
    //         })
    //         .catch(() => {
    //           this.$message.error('Send Email error!')
    //         })
    //     }
    //   },
  },
}
</script>

<style scoped lang="less">
#Home {
  padding-top: 136px;
  input {
    padding: 0 8px 8px 8px;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid #bdbdc3;
    font-size: 18px;
    width: 100%;
  }
  textarea {
    padding: 16px 0 0 0;
    height: 178px;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid #bdbdc3;
    font-size: 18px;
    width: 100%;
  }
  // .swiper {
  //   padding-bottom: 181px;
  //   width: 1200px;
  //   margin: auto;
  // }
  .title {
    margin: 0 auto 119px;
    text-align: center;
    width: 774px;
    font-family: ArialMT;
    font-size: 61px;
    font-weight: 900;
    color: #1d1d1f;
    > p {
      font-size: 38px;
    }
    &.bottom {
      margin: 0 auto 59px;
    }
  }
  .product {
    //width: 1200px;
    padding-top: 136px;
    display: flex;
    flex-direction: column;

    .context {
      margin-bottom: 120px;
      &:last-child {
        margin-bottom: 0;
      }
      display: flex;
      justify-content: space-between;
      .item {
        display: grid;
        justify-content: space-between;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        grid-gap: 16px 26px;
        width: 100%;
        .porduct {
          width: 385px;
          height: 590px;
          text-align: center;
          // &:hover {
          //   border: 1px solid#ff4f8d;
          // }
          .porduct-img {
            width: 384px;
            height: 420px;
            object-fit: contain;
          }
          .name {
            margin: 10px 0;
            font-family: ArialMT;
            font-size: 27px;
            font-weight: normal;
            color: #1d1d1f;
          }
        }
      }
      .her {
        position: relative;
        > img {
          width: 338px;
          height: 590px;
        }
        .alt {
          position: relative;
          bottom: 32px;
          left: 32px;
          font-family: ArialMT;
          font-size: 50px;
          font-weight: 900;
          color: #ffffff;
        }
      }
      .more {
        margin: 24px auto 0;
        cursor: pointer;
        border-radius: 20px;
        border: solid 1px #413328;
        width: 253px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-family: ArialMT;
        font-size: 18px;
        font-weight: normal;
        color: #5e5e60;
        &.her {
          position: relative;
          // bottom: 35px;
          left: 33px;
          border: solid 1px #ffffff;
          color: #ffffff;
        }
      }
    }
  }
  .profile {
    //width: 1200px;
    margin: 0 auto 219px auto;
    display: flex;
    flex-direction: column;
    .context {
      display: flex;
      justify-content: space-between;
      .tip {
        width: 410px;
        height: 410px;
        font-family: ArialMT;
        font-size: 16px;
        font-weight: normal;
        line-height: 28px;
        color: #515154;
      }
    }
    .ce {
      margin: 120px auto 0;
      width: 1110px;
      display: flex;
      justify-content: space-between;
      > div {
        text-align: center;
        font-family: ArialMT;
        font-size: 18px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #1d1d1f;
        > .ce-title {
          margin: 16px 0;
          font-family: ArialMT;
          font-size: 20px;
          font-weight: 100;
          line-height: 28px;
          color: #1d1d1f;
        }
      }
    }
  }
  .contact {
    //width: 1200px;
    margin: 0 auto 219px;
    .method {
      display: flex;
      .qr {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-right: 98px;
        font-family: ArialMT;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 28px;
        color: #1d1d1f;
        .Echo {
          padding: 8px 0;
        }
        .face {
          margin: 0 auto;
          // width: 310px;
          // height: 310px;
        }
      }
      .submit {
        display: flex;
        flex-direction: column;
        width: 659px;
        .flex {
          display: flex;
          border-bottom: 1px solid #bdbdc3;
          > input {
            border: none;
          }
        }
        .field {
          white-space: nowrap;
          font-family: ArialMT;
          font-size: 18px;
          font-weight: normal;
          // line-height: 28px;
          color: #515154;
          &.message {
            margin-top: 16px;
            // margin-bottom: 178px;
          }
        }
        .button {
          cursor: pointer;
          margin-top: 16px;
          display: flex;
          justify-content: flex-end;
          > div {
            width: 280px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            border-radius: 16px;
            background-color: #ff4f8d;
            font-family: ArialMT;
            font-size: 20px;
            font-weight: normal;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
