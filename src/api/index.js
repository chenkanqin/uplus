// 遍历获取API列表
const apiFiles = require.context('./page', true, /\.js$/)
const API = apiFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = apiFiles(modulePath);
  modules[moduleName] = value.default
  return modules
}, {});

export default API
// 注入到uni对象下
uni.$API = API;
