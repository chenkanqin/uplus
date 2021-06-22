export default {

  processing: ($url = '', query = {}) => {
    if (!$url) return;
    let method = 'get';
    let url = $url;
    // 默认过滤,可以自行独自处理特殊情况
    query = uni.$co.Common.clearParams(query);
    if (query.hasOwnProperty('method')) {
      method = query.method;
      // 删除 method
      delete query.method;
    }
    // 编辑删除时需要id
    if (method.toLowerCase() === 'get') {
      if (query.id || Number(query.id) === 0) {
        url = url + `/${query.id}`;
      }
      // 删除ID
      if (query.id) {
        delete query.id;
      }
    }
    let requestObj = {url};
    requestObj['method'] = method;
    requestObj.data = query;
    return requestObj;
  },
}