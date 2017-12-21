import {getGoods, getDynamic, getCategory, getCategoryList, getBrands,getBrandsall} from 'api/index'
import {ERR_SUCCEED} from "api/config";
import {
  SERVICE_INDEX,
  SERVICE_INDEXHEADER,
  SERVICE_DYNAMIC,
  SERVICE_CATEGORY,
  SERVICE_CATEGORYLIST,
  SERVICE_BRANDSLIST,
  SERVICE_PHONENUMBER,
  SERVICE_BRANDSALL
} from './types'
// const ERR_SUCCEED ="succeed"
export default {
  //获取datas 数据
  reqGoods({commit}, callback) {
    /*发起ajax请求*/
    getGoods().then(response => {
      //取得数据
      const result = response.data
      // console.log(result)
      //判断
      if (result.code === ERR_SUCCEED) {
        const goods = result.datas
        const menus = result.menus
        // console.log(menus)
        //updata state
        commit(SERVICE_INDEX, {goods})
        commit(SERVICE_INDEXHEADER, {menus})
        //数据得到update data 通知调用者
        callback && callback()
      }
    })
  },
  reqDynamic({commit}, callback) {
    getDynamic().then(response => {
      //发起请求
      const result = response.data
      if (result.code === ERR_SUCCEED) {
        const buys = result.data
        // console.log(arr)
        commit(SERVICE_DYNAMIC, {buys})
        callback && callback()
      }
    })
  },
  reqCategory({commit}, callback) {
    getCategory().then(response => {
      //发起请求
      const result = response.data
      if (result.code === ERR_SUCCEED) {
        const category = result.categorys
        // console.log(arr)
        commit(SERVICE_CATEGORY, {category})
        callback && callback()
      }
    })
  },
  reqCategoryList({commit}, callback) {
    getCategoryList().then(response => {
      //发起请求
      const result = response.data
      if (result.code === ERR_SUCCEED) {
        const categorylist = result.cate_list
        // console.log(arr)
        commit(SERVICE_CATEGORYLIST, {categorylist})
        callback && callback()
      }
    })
  },
  reqBrands({commit}, callback) {
    getBrands().then(response => {
      //发起请求
      const result = response.data
      if (result.code === ERR_SUCCEED) {
        const brandslist = result.brand
        // console.log(arr)
        commit(SERVICE_BRANDSLIST, {brandslist})
        callback && callback()
      }
    })
  },
  reqBrandsall({commit}, callback) {
    getBrandsall().then(response => {
      //发起请求
      const result = response.data
      if (result.code === ERR_SUCCEED) {
        const brandsall = result.brand
        // console.log(arr)
        commit(SERVICE_BRANDSALL, {brandsall})
        callback && callback()
      }
    })
  }
  /*获取menus数据*/
  /*reqGoods({commit}, callback) {
    /!*发起ajax请求*!/
    getGoods().then(response => {
      //取得数据
      const result = response.data
      console.log(result)
      //判断
      if (result.code === ERR_SUCCEED) {
        const goods = result.datas
        console.log(goods)
        //updata state
        commit(SERVICE_INDEX, {goods})
        //数据得到update data 通知调用者
        callback && callback()
      }
    })
  }*/
}
