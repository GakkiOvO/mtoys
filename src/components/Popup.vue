<template>
  <div class="modal-overlay">
    <div class="modal-wrapper">
      <div class="modal-block" :style="styles">
        <div class="close" @click="$emit('close')"></div>
        <div class="lo-container">
          <div class="welcom">
            <div class="title">WELCOM TO LOVE TOYS</div>
            <div>Unleash your pleasure</div>
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
      </div>
    </div>
  </div>
</template>

<script>
import apis from '@/network/orderApi'
export default {
  name: 'Popup',
  props: {
    styles: {
      type: Object,
      default: () => ({
        width: '752px;',
        // Height: '163px',
        // borderRadius: '25px',
        border: 'solid 1px #979797',
        padding: '55px 20px 46px',
      }),
    },
    productId: {
      type: String,
      default: '',
    },
  },
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
            productId: this.productId ? this.productId : null,
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

<style scoped lang="less">
.close {
  width: 20px;
  height: 20px;
  top: 32px;
  right: 32px;
  position: absolute;
  &:before {
    content: '';
    position: absolute; /*方便进行定位*/
    height: 20px;
    width: 1.5px;
    top: 2px;
    right: 9px; /*设置top和right使图像在20*20框中居中*/
    background: #86868b;
    transform: rotate(45deg);
  }
  &:after {
    content: '';
    position: absolute; /*方便进行定位*/
    height: 20px;
    width: 1.5px;
    top: 2px;
    right: 9px; /*设置top和right使图像在20*20框中居中*/
    background: #86868b;
    transform: rotate(-45deg);
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
.welcom {
  font-family: ArialMT;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #86868b;
  .title {
    font-family: ArialMT;
    font-size: 30px;
    font-weight: 900;
    font-stretch: normal;
    line-height: 36px;
    letter-spacing: 0px;
    color: #000000;
  }
}
.submit {
  margin-top: 75px;
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
      text-align: left;
      // margin-bottom: 178px;
    }
  }
  .button {
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
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.modal-block {
  position: relative;
  width: 752px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 10px;
  // font-family: 'Kanit', sans-serif;
  text-align: center;
  color: #231815;
  .lo-container {
    // padding: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.info-conformation {
  .lo-container {
    padding: 0 0 48px 0 !important;
    .info-title {
      height: 94px;
      line-height: 94px;
      min-width: 100%;
      background-color: #e9e3f2;
      font-size: 26px;
      font-weight: bold;
      text-align: center;
      color: #000000;
    }
    .btn-group {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      button {
        width: 262px;
        height: 69px;
        border: none;
        border-radius: 10px;
      }

      .conformation {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        background-color: #3a2d4b;
        color: #ffffff;
      }
      .back {
        margin-top: 24px;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        background-color: #f0f0f0;
        color: #000000;
      }
    }
  }
}
.otp-popup {
  &.modal-overlay {
    background-color: rgba(0, 165, 65, 0.5);
  }
  .modal-block {
    visibility: hidden;
  }
  .lo-container {
    img {
      visibility: visible;
      width: 200px;
      height: 200px;
    }
  }
}
</style>
