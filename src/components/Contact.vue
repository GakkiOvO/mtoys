<template>
  <div id="Contact">
    <section class="contact">
      <div class="banner">
        <div class="title">CONTACT US</div>
      </div>
      <div class="method">
        <div class="qr">
          <div>
            <img class="face" src="@/assets/image/home/icon_face.png" />
            <!-- <img class="face" src="@/assets/image/home/u48.webp" /> -->
            <div class="Echo">Echo</div>
            <!-- <div>Whats APP 联系人</div> -->
            <img class="qr-code" src="@/assets/image/home/img_ewm.webp" />
          </div>
          <div>
            <img class="face" src="@/assets/image/home/icon_face.png" />
            <!-- <img class="face" src="@/assets/image/home/u48.webp" /> -->
            <div class="Echo">Echo</div>
            <!-- <div>Whats APP 联系人</div> -->
            <img class="qr-code" src="@/assets/image/home/img_ewm.webp" />
          </div>
        </div>
        <div class="submit">
          <div class="flex">
            <div class="field">Your email:</div>
            <input
              v-model="user.email"
              type="text"
              @focus="$emit('pauses')"
              @blur="$emit('resumes')"
            />
          </div>
          <div class="field message">Message:</div>
          <textarea
            v-model="user.message"
            type="text"
            @focus="$emit('pause')"
            @blur="$emit('resume')"
          />
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
      this.$refs.child.pause()
    },
    resume() {
      this.$refs.child.resume()
    },
  },
}
</script>

<style lang="less" scoped>
#Contact {
  // margin: 192px 0;
  padding: 136px 0 188px;
  font-family: ArialMT;
  font-size: 24px;
  font-weight: normal;
  color: #1d1d1f;
  .title {
    font-size: 56px;
    font-weight: 900;
  }
  .field {
    font-size: 30px;
  }
  input {
    padding: 0 8px 8px 8px;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid #bdbdc3;
    font-size: 30px;
    width: 100%;
    color: #1d1d1f;
  }
  textarea {
    padding: 16px 0 0 0;
    height: 178px;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid #bdbdc3;
    font-size: 30px;
    width: 100%;
    color: #1d1d1f;
  }
  .contact {
    padding: 0 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .method {
      width: 100%;
      text-align: center;
      .qr {
        margin-top: 88px;
        padding: 0 104px;
        display: flex;
        justify-content: space-between;
        .face {
          width: 60px;
          height: 60px;
        }
        .qr-code {
          width: 155px;
          height: 155px;
        }
      }
      .submit {
        margin-top: 145px;
        display: flex;
        flex-direction: column;
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
          font-size: 30px;
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
          margin-top: 51px;
          display: flex;
          justify-content: flex-end;
          > div {
            width: 400px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            border-radius: 30px;
            background-color: #ff4f8d;
            font-family: ArialMT;
            font-size: 28px;
            font-weight: normal;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
