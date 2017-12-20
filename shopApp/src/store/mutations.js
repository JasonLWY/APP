import Vue from 'vue'
import {
  SERVICE_INDEX,
  SERVICE_INDEXHEADER,
  SERVICE_DYNAMIC,
  SERVICE_CATEGORY,
  SERVICE_CATEGORYLIST,
  SERVICE_BRANDSLIST
} from './types'

export default {
  [SERVICE_INDEX](state, {goods}) {
    state.goods = goods
  },
  [SERVICE_INDEXHEADER](state, {menus}) {
    state.menus = menus
  },
  [SERVICE_DYNAMIC](state, {buys}) {
    state.buys = buys
  },
  [SERVICE_CATEGORY](state, {category}) {
    state.category = category
  },
  [SERVICE_CATEGORYLIST](state, {categorylist}) {
    state.categorylist = categorylist
  },
  [SERVICE_BRANDSLIST](state, {brandslist}) {
    state.brandslist = brandslist
  }
}
