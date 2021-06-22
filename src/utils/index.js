// 遍历通用的js资源文件
const files = require.context('./resource', true, /\.js$/)
const resourceJs = files.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = files(modulePath);
  modules[moduleName] = value.default
  return modules
}, {});
export default resourceJs;
uni.$co = resourceJs;
