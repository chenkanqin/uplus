import Vue from 'vue';
import {RouterMount, createRouter} from 'uni-simple-router';
import permission from '@/utils/permission';
import store from '../store'

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  routes: [
    ...ROUTES,
    {
      path: '*',
      redirect: (to) => {
        return {name: '404'}
      }
    },
  ]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
 // console.log('全局路由前置守卫==', to, from)
  // 更新当前预览的路由
  store.dispatch('permission/handleChangeVal', {key: 'viewRoutes', val: to});
  next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {
  // console.log('跳转结束from:', from);

  // 更新路由轨迹
  permission.upPathRoutes({to, from});
})
Vue.use(router);
export {
  router,
  RouterMount
}