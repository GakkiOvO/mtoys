<template>
  <div id="ProductDetail">
    <div v-if="product" class="flex">
      <div class="product">
        <div>
          <!-- <div>myslide</div> -->
          <Myslide :src-list="imgList" />
          <div class="product-detail">
            <div class="product-detail-name">{{ product.productName }}</div>
            <div class="product-detail-context">
              {{ product.productDesc }}
            </div>
            <div class="product-detail-color">
              <div style="margin: auto 0">Color:</div>
              <div class="flex">
                <div class="color">
                  <div style="background-color: #fbd6d1"></div>
                </div>
                <div class="color">
                  <div style="background-color: #000000"></div>
                </div>
                <div class="color">
                  <div style="background-color: #e5396b"></div>
                </div>
                <div class="color">
                  <div style="background-color: #ff9833"></div>
                </div>
              </div>
            </div>
            <div class="product-detail-lead-time">
              <div class="key">Lead Time:</div>
              <div class="value">
                <div class="special first">
                  <div class="special-name">Quantity(Pieces)</div>
                  <div class="second">1 - 500</div>
                  <div>> 500</div>
                </div>
                <div class="special">
                  <div class="special-name">Est.Time(Days)</div>
                  <div class="second">7</div>
                  <div>Negotiable</div>
                </div>
              </div>
            </div>
            <div class="product-detail-lead-Customization">
              <div class="key">Customization:</div>
              <div class="value">
                <div class="special">
                  <div class="special-name">Customized logo</div>
                  <div class="second gray">(Min.Order:200 Pieces)</div>
                </div>
                <div class="special">
                  <div class="special-name">Customized packaging</div>
                  <div class="second gray">(Min.Order:200 Pieces)</div>
                </div>
              </div>
            </div>
            <div class="submit" @click="show = true">SUBMIT</div>
          </div>
        </div>
      </div>
      <div class="detail">
        <div class="group">
          <div class="title">Quantity(Pieces)</div>
          <div class="field">
            <div class="line">
              <div class="line-1">
                <div class="key">Place of Origin:</div>
                <div class="value">{{ product.origin }}</div>
              </div>
              <div class="line-2">
                <div class="key">Model Number:</div>
                <div class="value">{{ product.modlenumber }}</div>
              </div>
            </div>
            <div class="line">
              <div class="line-1">
                <div class="key">Type:</div>
                <div class="value">{{ product.type }}</div>
              </div>
              <div class="line-2">
                <div class="key">Brand Name:</div>
                <div class="value">{{ product.brandname }}</div>
              </div>
            </div>
            <div class="line">
              <div class="line-1">
                <div class="key">Material:</div>
                <div class="value">{{ product.material }}</div>
              </div>
              <div class="line-2">
                <div class="key">Product Name:</div>
                <div class="value">
                  {{ product.productName }}
                </div>
              </div>
            </div>
            <div class="line">
              <div class="line-1">
                <div class="key">Function:</div>
                <div class="value">{{ product.productFunction }}</div>
              </div>
              <div class="line-2">
                <div class="key">Color:</div>
                <div class="value">{{ product.color }}</div>
              </div>
            </div>
            <div class="line">
              <div class="line-1">
                <div class="key">MOQ:</div>
                <div class="value">{{ product.moq }}</div>
              </div>
              <div class="line-2">
                <div class="key">Weight:</div>
                <div class="value">{{ product.weight }}</div>
              </div>
            </div>
            <div class="line">
              <div class="line-1">
                <div class="key">Certificate:</div>
                <div class="value">{{ product.certificate }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="group">
          <div class="title">Supply Ability</div>
          <div class="field">
            <div class="line">
              <div class="line-1">
                <div class="key">Supply Ability:</div>
                <div class="value">{{ product.supplyability }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="group">
          <div class="title">Packaging&Delivery</div>
          <div class="field">
            <div class="line">
              <div class="line-1">
                <div class="key">Packaging Details:</div>
                <div class="value">{{ product.packingdetail }}</div>
              </div>
            </div>
            <div class="line">
              <div class="line-1">
                <div class="key">Port:</div>
                <div class="value">{{ product.port }}</div>
              </div>
            </div>
            <div class="line">
              <div class="line-1">
                <div class="key">Lead Time:</div>
                <div class="value">
                  <div class="special first">
                    <div class="special-name">Quantity(Pieces)</div>
                    <div class="second">1 - 500</div>
                    <div>> 500</div>
                  </div>
                  <div class="special">
                    <div class="special-name">Est.Time(Days)</div>
                    <div class="second">7</div>
                    <div>Negotiable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Popup v-show="show" :product-id="$route.query.productId" @close="show = false" />
  </div>
</template>

<script>
import Myslide from '@/components/Myslide'
import Popup from '@/components/Popup'
import apis from '@/network/orderApi'
export default {
  name: 'ProductDetail',
  components: {
    Myslide,
    Popup,
  },
  data() {
    return {
      show: false,
      product: null,
      imgList: [],
    }
  },
  mounted() {
    const { productId } = this.$route.query
    this.getDetail(productId)
  },
  destroyed() {
    this.$parent.productDetail = {}
  },
  methods: {
    getDetail(productId) {
      apis
        .QueryProductDetailByProductId({
          productId: productId,
        })
        .then(({ data }) => {
          this.product = data.result
          data.result.imgUrlList.forEach((img) => {
            let obj = {
              image: img,
            }
            this.imgList.push(obj)
          })
          // this.imgList.productImgUrlList = data.result.productImgUrlList
        })
        .catch(() => {})
    },
  },
}
</script>

<style lang="less" scoped>
#ProductDetail {
  .flex {
    display: flex;
    flex-direction: column;
    .product {
      background: #e3e4e7;
      padding-top: 40px;
      > div {
        //width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        .product-detail {
          width: 626px;
          .product-detail-name {
            margin-bottom: 20px;
            font-family: ArialMT;
            font-size: 40px;
            font-weight: 900;
            color: #1d1d1f;
          }
          .product-detail-context {
            margin-bottom: 76px;
            font-family: ArialMT;
            font-size: 17px;
            font-weight: 900;
            color: #1d1d1f;
          }
          .product-detail-color {
            display: flex;
            justify-content: space-between;
            font-family: ArialMT;
            font-size: 16px;
            font-weight: normal;
            color: #86868b;
            .flex {
              display: flex;
              flex-direction: row;
              .color {
                background-color: #e3e4e7;
                border-radius: 3px;
                border: solid 1px #d6d6d6;
                padding: 6px 44px;
                margin-right: 8px;
                > div {
                  width: 32px;
                  height: 32px;
                  border-radius: 50%;
                  box-shadow: inset 0px 3px 1px 0px rgba(0, 0, 0, 0.1);
                }
              }
            }
          }
          .product-detail-lead-time {
            margin-top: 46px;
            display: flex;
            padding: 8px 0;
            border-top: solid 1px #d6d6d6;
            border-bottom: solid 1px #d6d6d6;
          }
          .product-detail-lead-Customization {
            margin-top: 46px;
            display: flex;
          }
          .submit {
            cursor: pointer;
            margin: 71px 0 53px;
            padding: 11px 158px;
            width: min-content;
            font-family: ArialMT;
            font-size: 22px;
            font-weight: normal;
            color: #ffffff;
            background: #ff4f8d;
            border-radius: 40px;
          }
          .key {
            width: 133px;
            margin-bottom: 31px;
            font-family: ArialMT;
            font-size: 16px;
            font-weight: normal;
            color: #86868b;
            white-space: nowrap;
          }
          .value {
            white-space: nowrap;
            padding-left: 37px;
            font-family: ArialMT;
            font-size: 18px;
            font-weight: normal;
            color: #1d1d1f;
            .special {
              display: flex;
              margin-bottom: 16px;
              &.first {
                border-bottom: 1px solid #d6d6d6;
                height: 37px;
              }
              > div {
                margin-right: 88px;
              }
              .special-name {
                width: 134px;
              }
              .second {
                width: 55px;
                &.gray {
                  color: #86868b;
                }
              }
            }
          }
        }
      }
    }
    .detail {
      //width: 1200px;
      padding-top: 173px;
      margin: auto;
      .group {
        margin-bottom: 114px;
        .title {
          margin-bottom: 30px;
          font-family: ArialMT;
          font-size: 24px;
          font-weight: normal;
          color: #1d1d1f;
        }
        .field {
          display: flex;
          flex-direction: column;
          .line {
            display: flex;
            margin-bottom: 31px;
            // justify-content: space-between;
            // > div {
            //   display: flex;
            //   margin-right: 299px;
            //   width: 269px;
            // }
            .line-1 {
              display: flex;
              flex: 0.5;
            }
            .line-2 {
              display: flex;
              flex: 0.5;
              margin-left: 214px;
            }
            .key {
              min-width: 133px;
              font-family: ArialMT;
              font-size: 16px;
              font-weight: normal;
              color: #86868b;
              white-space: nowrap;
            }
            .value {
              // white-space: nowrap;
              padding-left: 16px;
              font-family: ArialMT;
              font-size: 18px;
              font-weight: normal;
              color: #1d1d1f;
              .special {
                display: flex;
                margin-bottom: 16px;
                &.first {
                  border-bottom: 1px solid #d6d6d6;
                  height: 37px;
                }
                > div {
                  margin-right: 88px;
                }
                .special-name {
                  width: 134px;
                }
                .second {
                  width: 65px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
