import Vue from 'vue'
import store from '@/store'
import {isString, isArray} from '@/utils/validate'
import config from '@/config'

// errorLog:'production' | ['production', 'development']
const {errorLog: needErrorLog} = config

function checkNeed() {
  const env = process.env.NODE_ENV;
  if (isString(needErrorLog)) {
    return env === needErrorLog
  }
  if (isArray(needErrorLog)) {
    return needErrorLog.includes(env)
  }
  return false
}

if (checkNeed()) {
  Vue.config.errorHandler = function (err, vm, info, a) {
    // console.log('err, vm, info, a==', err, vm, info, a);
    // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
    Vue.nextTick(() => {
      store.dispatch('errorLog/handleChangeVal', {
        key: 'addErrorLog',
        val: {
          noSetState: true,
          data: {
            err,
            vm,
            info,
            evn: process.env.NODE_ENV
          }
        }
      })
    })
  }
}
