import Vue from 'vue'
import App from './App'
import store from './store'
import Mixin from './mixins'; // global Mixins
Vue.mixin(Mixin);
import './styles/index.scss' // global css
Vue.config.productionTip = false;
App.mpType = 'app';

import * as filters from './filters' // global filters
// 注册全局 filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});
//注册全局layout组件
import layout from '@/layout/index.vue';

Vue.component("layout", layout);
//注册全局icon组件 使用的是阿里icon
import vIcon from '@/components/v-icon/index.vue';

Vue.component("vIcon", vIcon);

// 注册头部
import appHeader from '@/components/header/index.vue';

Vue.component("appHeader", appHeader);
/** 导入本地缓存公共方法*/
import '@/utils/sessionStorage'
/** 导入API入口*/
import '@/api';
/** 导入utils*/
import '@/utils';
import '@/utils/error-log' // error log


import {router, RouterMount} from '@/router';

const app = new Vue({
  ...App,
  store
});

// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
