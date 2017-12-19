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
  return  axios.get(`${url}pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1513652456405`)
}
export const getDynamic = () => {
  const url = '/apl.epet.com/v3/index/main.html?'
 // https://mall.api.epet.com/v3/index/main.html?
  // do=GetDynamicV315&pet_type=dog&version=358&system=wap&isWeb=1&_=1513655559493
  return axios.get(`${url}do=GetDynamicV315&pet_type=dog&version=358&system=wap&isWeb=1&_=1513655559493`)
}


