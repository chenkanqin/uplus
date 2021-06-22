import sessionStorage from '@/utils/sessionStorage';
import settings from '@/config'
import mutationsActions from '../mutations-actions';

let cur = {
  settings: {...settings},
};

/** 获取本地配置缓存*/
let storage = (key) => {
  sessionStorage.get(key).then($data => {
    state[key] = $data.data;
  }).catch(() => { // 不存在
    state[key] = cur[key];
  });
};

let state = {
  settings: storage('settings'),
  sysInfo: {}
};

export default {
  namespaced: true,
  state,
  mutations: mutationsActions.mutations({
    handler(state, data) {
    },
  }),
  actions: mutationsActions.actions,
}

