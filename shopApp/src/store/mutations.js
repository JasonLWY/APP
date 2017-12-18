import Vue from 'vue'
import {SERVICE_INDEX,SERVICE_INDEXHEADER} from './types'

export default {
  [SERVICE_INDEX] (state, {goods}){
    state.goods = goods
  },
  [SERVICE_INDEXHEADER] (state, {menus}){
    state.menus = menus
  }
}
