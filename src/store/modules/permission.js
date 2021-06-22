import config from '@/config'
import mutationsActions from '../mutations-actions'

let state = {
  sysInfo: {},

  // 从page.json中获取的pages信息
  pages: [],
  // 处理完成的路由页面
  routes: {},
  // 路由轨迹
  pathRoutes: [],
  // 当前的路由
  viewRoutes: {},
};

// 相关方法
let initRouterFun = {
  // 初始化路由
  initRouter(state, data) {
    state.pages = [];
    state.routes = {};
    if (data) {
      // console.log('初始化页面路由：', data);
      let routes = {};
      data.map(ro => {
        if (!ro.pageParam) {
          ro.pageParam = {};
        }
        routes[ro.name || new Date().getTime()] = {...ro};
      })
      state.pages = data;
      state.routes = routes
      config.pages = data;
      config.routes = routes;
    }
  },

  // 更新路由轨迹
  upPathRoutes(state, data) {
    if (data.val && data.val.data) {
      state['pathRoutes'].push(data.val.data);
    }
  }
}

export default {
  namespaced: true,
  state,
  actions: mutationsActions.actions,
  mutations: mutationsActions.mutations({
    handler(state, data) {
      // 初始化app路由
      if (data.key === 'initRouter') {
        initRouterFun.initRouter(state, ROUTES);
      }
      // 路由轨迹
      if (data.key === 'pathRoutes') {
        initRouterFun.upPathRoutes(state, data)
      }
      // 更新路由信息
      if (data.key === 'changeRoutes') {
        // 当前的路由列表
        let $currentRoutes = state.pages || ROUTES;
        // 当前需要改的路由item
        let changeRouteItem = data.val.data;
        if (typeof changeRouteItem === 'object') {
          // 如果路由存在那么更改，不存在，就添加
          let $index = $currentRoutes.findIndex(cu => cu.path === changeRouteItem.path);
          if ($index >= 0) {
            $currentRoutes[$index] = Object.assign(changeRouteItem);
          } else {
            $currentRoutes.push(changeRouteItem);
          }

          let isCanChange = true;
          // 查看目前多少底部导航
          let $footerTabs = $currentRoutes.filter(cu => cu.pageParam.tab);
          if ($footerTabs && $footerTabs.length) {
            let tabsLength = $footerTabs.length;
            if (tabsLength > config.footerTabConfig.max) {
              console.error(`底部导航不能超过${config.footerTabConfig.max}`);
              isCanChange = false;
            }
            if (tabsLength >= 1 && tabsLength < config.footerTabConfig.min) {
              console.error(`底部导航不能少于${config.footerTabConfig.min}`);
              isCanChange = false;
            }
          } else {
            isCanChange = false;
          }
          if (isCanChange) {
            initRouterFun.initRouter(state, $currentRoutes)
          }
        } else {
          console.warn('更改的路由需要object')
        }
      }
    }
  })
}

