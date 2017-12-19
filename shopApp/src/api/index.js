import axios from 'axios'

/*暴露请求方法*/
/*export function getGoods() {
  /!*url地址*!/
  const  url = '/api/getGoods'
  /!*请求参数设置*!/
  const data = Object.assign({},{
    pet_type: 'dog',
    version: 358,
    is_single: 0,
    system: 'wap',
    isWeb: 1,
    _: 1513390301942
  })
  /!*返回Promise格式*!/
 return  axios.get(url, {
   params: data
 }).then(response =>{
   return Promise.resolve(response.data)
 })
}*/
/*获取主页的商品信息*/
export const getGoods = () => {
  const url= '/api/v3/index/main.html?'
  /*const data = Object.assign({},{
    pet_type: 'dog',
    version: 358,
    is_single: 0,
    system: 'wap',
    isWeb: 1,
    _: 1513390301942
  })*/
  return  axios.get(`${url}pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1513683910452`)
}
export const getDynamic = () => {
  const url = '/api/v3/index/main.html?'
 // https://mall.api.epet.com/v3/index/main.html?
  // do=GetDynamicV315&pet_type=dog&version=358&system=wap&isWeb=1&_=1513655559493
  return axios.get(`${url}do=GetDynamicV315&pet_type=dog&version=358&system=wap&isWeb=1&_=1513655559493`)
}
export const getCategory = () => {
  const url = '/api/v3/goods/category/main.html?'
  // https://mallcdn.api.epet.com/v3/goods/category/main.html?pet_type=dog&system=wap&isWeb=1&version=303&_=1513692978078
  return axios.get(`${url}pet_type=dog&system=wap&isWeb=1&version=303&_=1513692978078`)
}
//category-list
export const getCategoryList = () => {
  const url = '/api/v3/goods/category/main.html?'
  // https://mallcdn.api.epet.com/v3/goods/category/main.html?pet_type=dog&system=wap&isWeb=1&version=303&_=1513692978078
  return axios.get(`${url}do=getChildren&owner=88888&pet_type=dog&system=wap&isWeb=1&version=303&_=1513694957236`)
}
//https://mallcdn.api.epet.com/v3/goods/category/main.html?do=getChildren&owner=88888&pet_type=dog&system=wap&isWeb=1&version=303&_=1513694957236

//brands-list获取
export const getBrands = () => {
  const url = '/api/v3/brand/list/main.html?'
  // https://mallcdn.api.epet.com/v3/brand/list/main.html?pet_type=dog&system=wap&isWeb=1&version=303&_=1513697366601
  return axios.get(`${url}pet_type=dog&system=wap&isWeb=1&version=303&_=1513697366601`)
}
