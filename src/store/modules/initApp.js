import mutationsActions from '../mutations-actions'
import store from "../index";
import variables from '../../uni.scss';

let state = {
  sysInfo: {},
  theme: {
    ...variables
  }
};

export default {
  namespaced: true,
  state,
  actions: mutationsActions.actions,
  mutations: mutationsActions.mutations({
    handler(state, data) {
      // 初始化APP
      if (data.key === 'init') {
        // 初始化路由
        store.dispatch('permission/handleChangeVal', {key: 'initRouter', val: {noSetState: true}})
        store.dispatch('initApp/handleChangeVal', {key: 'initThemeColor', val: {noSetState: true}})
      }
      // 初始化主题
      if (data.key === 'initThemeColor') {
        initAppFun.initThemeColor(state, data);
      }
      // 动态修改主题
      if (data.key === 'changeThemeColor') {
        data.val['noSetState'] = true;
        initAppFun.changeThemeColor(state, data);
      }
    }
  })
}

let initAppFun = {
  // 初始化主题
  async initThemeColor(state) {
    let themeColor = await uni.sessionStorage.get('themeColor');
    if (themeColor) {
      initAppFun.changeThemeColor(state, {val: themeColor.data})
    }
  },
  // 更新主题
  async changeThemeColor(state, data) {
    /**
     * themeObject 必须为对象
     * key 为 theme-style setProperty的key值
     * value 为 theme-style setProperty的value值
     * 例如：{
     *   "--body-color":"#fff"
     * }
     * */
    let $themeObject = data.val;
    if (typeof $themeObject !== 'object') return;
    try {
      let themeColor = await uni.sessionStorage.get('themeColor');
      if (themeColor) {
        $themeObject = {
          ...themeColor.data,
          ...$themeObject,
        };
      }
    } catch (e) {

    }
    uni.sessionStorage.set('themeColor', $themeObject);
    try {
      for (let ol in $themeObject) {
        if (ol.includes('--')) {
          // #ifdef H5
          console.log('h5---', ol)
          document.getElementsByClassName('theme-style')[0].style.setProperty(ol, $themeObject[ol]);
          // #endif
          state['theme'][ol] = $themeObject[ol];
        }
      }
    } catch (e) {
      console.warn('修改主题失败', e)
    }
  }
}