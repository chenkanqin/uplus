import mutationsActions from '../mutations-actions';

let state = {
  // 页面onShow
  pageOnShow: false,
  // 页面onLoad
  pageOnLoad: false,
};

export default {
  namespaced: true,
  state,
  mutations: mutationsActions.mutations(),
  actions: mutationsActions.actions,
}

