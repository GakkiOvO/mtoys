const DynamicComponent = {
  install(Vue) {
    Vue.component('dynamic', {
      // eslint-disable-next-line vue/require-prop-types
      props: ['template'],
      render(h) {
        return h({
          template: `<div v-bind="$attrs">${this.template}</div>`,
        })
      },
    })
  },
}

export default DynamicComponent
