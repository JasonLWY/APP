import Vue from 'vue'
import {SERVICE_INDEX} from './types'

export default {
  [SERVICE_INDEX] (state, {goods}){
    state.goods = goods
  }
}
