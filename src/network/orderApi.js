import network from './index'

const orderApi = {}

orderApi.ContactUs = (param) =>
  network.post({
    url: '/contactUs',
    data: param,
  })

orderApi.QueryProductCategories = (param) =>
  network.post({
    url: '/queryProductCategories',
    data: param,
  })
orderApi.QueryProductListByCateId = (param) =>
  network.post({
    url: '/queryProductListByCateId',
    data: param,
  })
orderApi.QueryProductDetailByProductId = (param) =>
  network.post({
    url: '/queryProductDetailByProductId',
    data: param,
  })

export default orderApi
