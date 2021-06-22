import mutationsActions from '../mutations-actions'

let state = {
  logs: []
};

// 相关方法
let logFun = {
  // 更新报错日记
  addErrorLog(state, data) {
    if (data.val && data.val.data) {
      let page = '';
      let currentPages = getCurrentPages();
      if (currentPages && currentPages.length) {
        page = currentPages[currentPages.length - 1].__page__;
      }
      data.val.data['path'] = page
      state['logs'].push(data.val.data);
    }
  }
}

export default {
  namespaced: true,
  state,
  actions: mutationsActions.actions,
  mutations: mutationsActions.mutations({
    handler(state, data) {
      if (data.key === 'addErrorLog') {
        logFun.addErrorLog(state, data);
      }
    }
  })
}

