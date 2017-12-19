import {getGoods,getDynamic} from 'api/index'
import {ERR_SUCCEED} from "api/config";
import {SERVICE_INDEX,SERVICE_INDEXHEADER,SERVICE_DYNAMIC} from './types'
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
