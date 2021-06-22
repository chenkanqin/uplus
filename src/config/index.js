const env = require('./env');
const setStorageSyncField = require('./setStorageSync-field');

// 全局配置
const config = {
  title: 'QQ:2052021114',
  currentService: env.currentService,
  serverUrl: env.EVENTHOST,
  pages: [],
  routes: {},
  // 保存到本地的字段
  setStorageSyncField: {
    ...setStorageSyncField
  },
  // 本地存储时间 天
  storageExpired: 365,
  // 资源
  staticUrl: '',
  //不填就不记录， 错误日记 'production' | ['production', 'development']
  errorLog: 'development',
  // 底部导航参数配置
  footerTabConfig: {
    max: 5, // 最大值
    min: 2, // 最小值
  }
}
export default config;
