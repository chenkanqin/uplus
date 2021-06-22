import store from "../store";

export default {
  // 更新路由轨迹
  /**
   * push  === navigateTo
   * replace  === redirectTo
   * pushTab  === switchTab
   * replaceAll  === reLaunch
   * back  === navigateBack
   * */
  upPathRoutes(option = {}) {
    let {to, from} = option;
   // console.log('to, from=====', to, from);

    // 跳转方式 switchTab、reLaunch
    //let {NAVTYPE} = to;



    store.dispatch('permission/handleChangeVal', {
      key: 'pathRoutes',
      val: {data: {time: new Date().getTime(), ...to}, noSetState: true}
    });
  }
}