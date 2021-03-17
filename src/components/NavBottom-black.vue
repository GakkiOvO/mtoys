<template>
  <footer id="NavBottom">
    <div class="footer">
      <div class="flex">
        <img src="@/assets/image/home/logo.png" alt="" />
        <div class="col ax-default first">
          <span class="title">Contact Info</span>
          <span>winnie@warmdoll.com</span>
          <span style="width: 300px">
            #606, Bao Jie An building, Lao Dong road, Xi Xiang street, Bao An area, Shenzhen city,
            Guang Dong province, China. 518100t.
          </span>
        </div>
        <div class="col ax-default">
          <span class="title">Useful Links</span>
          <span
            ><a style="color: #86868b" href="https://www.facebook.com/china.sex.products"
              >Facebook</a
            ></span
          >
          <span><a style="color: #86868b" href="https://youtu.be/cRj5Wvz8nTQ">YouTube</a></span>
          <span
            ><a style="color: #86868b" href="https://www.siliconwives.com/">Siliconwives</a></span
          >
          <span><a style="color: #86868b" href="https://www.pinkcherry.com/">Pinkcherry</a></span>
        </div>
        <div class="col ax-default">
          <span class="title">Hot Links</span>
          <span>Home</span>
          <span>Products</span>
          <span>Profiles</span>
        </div>
        <!-- <div class="tip ax-default">
          <div class="col">
            <span class="title">Contact Info</span>
            <span>winnie@warmdoll.com</span>
            <span style="width: 300px">
              #606, Bao Jie An building, Lao Dong road, Xi Xiang street, Bao An area, Shenzhen city,
              Guang Dong province, China. 518100t.
            </span>
          </div>
          <div class="col">
            <span class="title">Useful Links</span>
            <span>delivey</span>
            <span>facebook</span>
            <span>whatapp</span>
          </div>
          <div class="col" style="width: 237px">
            <span class="title">Hot Links</span>
            <span>home</span>
            <span>products</span>
            <span>profiles</span>
          </div>
        </div> -->
      </div>
      <div class="footer-paragraph ax-default">
        All Rights Reserved | Shenzhen Warmdoll Model Co., Ltd. 2021
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Head',
  components: {},
}
</script>

<style lang="less" scoped>
#NavBottom {
  .footer {
    background: inherit;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(#1d1d1f, #1d1d1f), linear-gradient(#000000, #000000);
    background-blend-mode: normal, normal;
    .flex {
      display: flex;
      flex-direction: column;
      > img {
        // width: 243px;
        // height: 133px;
        margin: 125px auto 156px auto;
      }
      .col {
        padding-left: 72px;
        // margin: 91px auto 0;
        display: flex;
        flex-direction: column;
        span {
          font-size: 26px;
          margin-top: 31px;
        }
      }
    }
    .footer-paragraph {
      margin: 94px auto 53px;
    }

    .title {
      margin-bottom: 24px;
      font-family: 'ArialMT', 'Arial Bold', 'Arial', sans-serif;
      font-weight: 100;
      font-style: normal;
      text-align: left;
      color: #f5f5f7;
    }
    .ax-default {
      font-family: 'ArialMT', 'Arial', sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 22px;
      letter-spacing: normal;
      color: #86868b;
      vertical-align: none;
      line-height: normal;
      text-transform: none;
    }
  }
}
</style>
