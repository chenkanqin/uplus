export default {
  mutations(options = {}) {
    return {
      CHANGE_VAL: (state, data) => {
        if (options.hasOwnProperty('handler') && typeof options.handler === 'function') {
          options.handler(state, data);
        }

        // data.val.noSetState  = true; 不自动设置state的值
        if (data['val'] && !data['val'].noSetState) {
          // 严格对照字段模式 严格模式
          if (data['val']['strictMode']) {
            for (let ol in data['val']) {
              state[data.key][ol] = data['val'][ol];
            }
          } else {
            state[data.key] = data['val'];
          }
        }
      }
    }
  },
  actions: {
    handleChangeVal({commit}, data) {
      if (data.key && data.hasOwnProperty('val')) { // state的key val值列表
        commit('CHANGE_VAL', data);
      }
    }
  },
}