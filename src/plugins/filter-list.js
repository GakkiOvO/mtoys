import * as moment from 'moment'
import 'moment/locale/th'

const getInt = (value) => {
  switch (typeof value) {
    case 'number':
      return value
    case 'string':
      return parseFloat(value)
    default:
      return 0
  }
}

const FilterList = {
  install(Vue) {
    Vue.filter('formatPrice', (value) => {
      const price = getInt(value)
      return (
        '฿ ' +
        price
          .toFixed(2)
          .toString()
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
      )
    })

    Vue.filter('maskMobileNo', (MobileNo) => {
      if (MobileNo?.length > 3 && MobileNo.length <= 6) {
        MobileNo = MobileNo.slice(0, 3) + ' ' + MobileNo.slice(3)
      } else if (MobileNo?.length > 6) {
        MobileNo = MobileNo.slice(0, 3) + ' ' + MobileNo.slice(3, 6) + ' ' + MobileNo.slice(6)
      }
      MobileNo = `(+66) ${MobileNo.substring(1)}`
      return MobileNo
    })

    Vue.filter('formatDate', (value) => {
      const time = moment(value)
      if (Vue.$cookies.get('LanguageId') === '1') return time.format('YYYY/MM/DD')
      moment.locale('th')
      time.add(543, 'years')
      return time.format('DD MMM YYYY')
    })
    Vue.filter('formateMemId', (value) => {
      value = value.replace(/^(.{3})(.{3})(.{4})$/g, '$1-$2-$3')
      return value
    })
  },
}

export default FilterList
