import {getGoods} from 'api/index'
import {ERR_SUCCEED} from "api/config";
import {SERVICE_INDEX} from './types'
// const ERR_SUCCEED ="succeed"
export default {
  reqGoods({commit}, callback) {
    /*发起ajax请求*/
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
  }
}
