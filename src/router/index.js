import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const componentList = {
  Home: () => import(/* webpackPreload: true */ '@/view/home/Home'),
  Products: () => import(/* webpackPreload: true */ '@/view/home/Products'),
  ProductDetail: () => import(/* webpackPreload: true */ '@/view/home/ProductDetail'),
  Profiles: () => import(/* webpackPreload: true */ '@/view/home/Profiles'),
  Contact: () => import(/* webpackPreload: true */ '@/view/home/Contact'),
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Home',
      component: componentList.Home,
    },
    {
      path: '/Home',
      name: 'home',
      meta: {
        title: 'home',
      },
      component: componentList.Home,
    },
    {
      path: '/Products',
      name: 'products',
      meta: {
        title: 'products',
        parentUrl: '/Home',
      },
      component: componentList.Products,
      children: [
        {
          path: 'ProductDetail',
          name: 'product detail',
          meta: {
            title: 'product detail',
            parentUrl: '/Products',
          },
          component: componentList.ProductDetail,
        },
      ],
    },
    {
      path: '/Profiles',
      name: 'profiles',
      meta: {
        title: 'profiles',
        parentUrl: '/Home',
      },
      component: componentList.Profiles,
    },
    {
      path: '/Contact',
      name: 'contact',
      meta: {
        title: 'contact',
        parentUrl: '/Home',
      },
      component: componentList.Contact,
    },
  ],
})
