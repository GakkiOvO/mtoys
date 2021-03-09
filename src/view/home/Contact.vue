<template>
  <div id="Contact">
    <section class="contact">
      <div class="banner">
        <img src="@/assets/image/home/banner_04.webp" alt="" />
        <div class="title">CONTACT US</div>
      </div>
      <div class="method">
        <div class="qr">
          <img class="face" width="60" height="60" src="@/assets/image/home/icon_face.png" />
          <!-- <img class="face" src="@/assets/image/home/u48.webp" /> -->
          <div class="Echo">Echo</div>
          <!-- <div>Whats APP 联系人</div> -->
          <img src="@/assets/image/home/img_ewm.webp" />
        </div>
        <div class="qr">
          <img class="face" width="60" height="60" src="@/assets/image/home/icon_face.png" />
          <!-- <img class="face" src="@/assets/image/home/u48.webp" /> -->
          <div class="Echo">Echo</div>
          <!-- <div>Whats APP 联系人</div> -->
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
    </section>
  </div>
</template>

<script>
import apis from '@/network/orderApi'
export default {
  name: 'Contact',
  data() {
    return {
      user: {
        email: null,
        message: null,
      },
    }
  },
  methods: {
    ContactUs() {
      if (this.user.email && this.user.message) {
        apis
          .ContactUs({
            email: this.user.email,
            message: this.user.message,
          })
          .then(() => {
            this.user.email = null
            this.user.message = null
            this.$message.success('Send Email success!')
          })
          .catch(() => {
            this.$message.error('Send Email error!')
          })
      }
    },
    pause() {
      // this.$refs.child.pause()
    },
    resume() {
      // this.$refs.child.resume()
    },
  },
}
</script>

<style lang="less" scoped>
#Contact {
  .contact {
    text-align: center;
    //width: 1200px;
    margin: 0 auto 219px;
    > .banner {
      position: relative;
      margin: 48px 0 119px;
    }
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
          text-align: left;
          white-space: nowrap;
          font-family: ArialMT;
          font-size: 18px;
          font-weight: normal;
          // line-height: 28px;
          color: #000000;
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
            width: 160px;
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
  .title {
    position: absolute;
    top: 209px;
    right: 306px;
    text-align: center;
    font-family: ArialMT;
    font-size: 80px;
    font-weight: 900;
    color: #ffffff;
  }
}
</style>
