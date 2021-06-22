const getters = {
  pages: state => state.permission.pages,
  viewRoutes: state => state.permission.viewRoutes,
  routes: state => state.permission.routes,
  pathRoutes: state => state.permission.pathRoutes,
  settings: state => state.settings.settings,
  pageOnShow: state => state.common.pageOnShow,
  pageOnLoad: state => state.common.pageOnLoad,
  theme: state => state.initApp.theme,
  errorLog: state => state.errorLog.logs,
  footerTabs: state => {
    return state.permission.pages.filter(item => item.pageParam && item.pageParam.tab) || []
  }
};
export default getters
