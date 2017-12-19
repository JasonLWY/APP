import Vue from 'vue'
import {SERVICE_INDEX,SERVICE_INDEXHEADER,SERVICE_DYNAMIC} from './types'

export default {
  [SERVICE_INDEX] (state, {goods}){
    state.goods = goods
  },
  [SERVICE_INDEXHEADER] (state, {menus}){
    state.menus = menus
  },
  [SERVICE_DYNAMIC] (state, {buys}){
    state.buys = buys
  }
}
