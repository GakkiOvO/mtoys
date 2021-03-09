import Vue from 'vue'

const el = document.getElementById('lds-spinner')

const loading = {
  show() {
    el.style.display = 'flex'
    document.documentElement.style.overflow = 'hidden'
  },
  hide() {
    el.style.display = 'none'
    document.documentElement.style.overflow = 'auto'
    document.getElementById('app').style.overflow = 'visible'
  },
}

export default {
  install() {
    if (!Vue.$loading) {
      Vue.$loading = loading
    }
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading
      },
    })
  },
}
