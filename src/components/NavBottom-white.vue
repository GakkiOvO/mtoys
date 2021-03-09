<template>
  <footer id="NavBottom">
    <div class="footer">
      <img src="@/assets/image/home/u59.webp" alt="" />
      <div class="tip ax-default">
        <div class="col">
          <span class="title">contact info</span>
          <span>winnie@warmdoll.com</span>
          <span style="width: 300px">
            #606, Bao Jie An building, Lao Dong road, Xi Xiang street, Bao An area, Shenzhen city,
            Guang Dong province, China. 518100t.
          </span>
        </div>
        <div class="col">
          <span class="title">useful links</span>
          <span>delivey</span>
          <span>facebook</span>
          <span>whatapp</span>
        </div>
        <div class="col" style="width: 237px">
          <span class="title">hot links</span>
          <span>home</span>
          <span>products</span>
          <span>profiles</span>
        </div>
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
  position: fixed;
  width: 100%;
  bottom: 50px;
  left: 0;
  right: 0;
  .footer {
    // height: 304px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(121, 121, 121, 1);
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    > img {
      margin: 16px auto 32px auto;
      width: 260px;
      height: 58px;
    }
    .tip {
      display: flex;
      justify-content: space-around;
      .col {
        display: flex;
        flex-direction: column;
        span {
          margin-top: 8px;
        }
      }
    }
    .footer-paragraph {
      margin: 24px auto 8px;
    }

    .title {
      margin-bottom: 24px;
      font-family: 'ArialMT', 'Arial Bold', 'Arial', sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 18px;
      text-align: left;
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
}
</style>
