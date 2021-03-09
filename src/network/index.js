import axios from 'axios'
// import Vue from 'vue'
// import store from '@/store'
// const PREFIX = '/api'
const PREFIX =
  process.env.NODE_ENV != 'development' ? 'https://api.ailovetoys.com/lovetoys-api' : '/api'
// var apiNum = 0

const instance = axios.create({
  // 是否携带cookie信息  default ：false
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Cache-Control': 'no-cache',
    'Access-Control-Expose-Headers': 'RetStatus',
    'X-Amz-Date': '123',
    Authorization: '123',
    'X-Api-Key': '123',
    'X-Amz-Security-Token': '123',
  },
  responseType: 'json',
  timeout: 30000, // 请求超时时间
})

// 拦截接口request  格式化请求数据

instance.interceptors.request.use((obj) => {
  // apiNum++
  // Vue.$loading.show()
  const { url, data = {}, headers = {} } = obj.url || {}
  Object.assign(obj, { data: data, url: PREFIX + url })
  Object.assign(obj.headers, headers)
  return obj
})

// 拦截接口response  格式化响应数据
instance.interceptors.response.use(
  (res) => {
    // apiNum--
    // if (apiNum <= 0) {
    //   Vue.$loading.hide()
    // } else {
    //   Vue.$loading.show()
    // }
    const data = res.data || {}
    return data.Form ? Object.assign(res, { data: data.Form[0].FormData }) : res
  },
  (err) => {
    // apiNum--
    // if (apiNum <= 0) {
    //   Vue.$loading.hide()
    // } else {
    //   Vue.$loading.show()
    // }
    return Promise.reject(err)
  }
)

export default {
  get(obj) {
    return Promise.resolve(instance.get(obj))
  },

  post(obj) {
    return Promise.resolve(instance.post(obj))
  },

  delete(obj) {
    return Promise.resolve(instance.delete(obj))
  },

  put(obj) {
    return Promise.resolve(instance.put(obj))
  },

  patch(obj) {
    return Promise.resolve(instance.put(obj))
  },
}
