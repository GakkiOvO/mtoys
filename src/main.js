import(/* webpackPreload: true */ '@/assets/styles/main.less')
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import { message } from 'ant-design-vue'
import 'muse-ui/lib/styles/base.less'
import { Drawer, List } from 'muse-ui'
import 'muse-ui/lib/styles/theme.less'
Vue.prototype.$message = message
message.config({
  top: `100px`,
  duration: 3,
  // maxCount: 1
})
Vue.use(message)
Vue.use(Drawer)
Vue.use(List)
// import Loading from '@/plugins/loading'
// import { VueJsonp } from 'vue-jsonp'

// import FilterList from '@/plugins/filter-list'
// import DynamicComponent from '@/plugins/dynamic'
// import VueCookies from 'vue-cookies'
// Vue.use(VueJsonp)
// Vue.use(Loading)
// Vue.use(FilterList)
// Vue.use(DynamicComponent)
// Vue.use(VueCookies)
// require('viewport-units-buggyfill').init()
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
