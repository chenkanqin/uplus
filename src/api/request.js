const config = require("@/config");
/***************/
//封装post，get请求
/***************/
import apiConfig from './apiConfig';

class Ajax {
  /**
   * @param url 地址
   * @param params 请求参数
   * @param more 更多其他的参数
   *
   * more loading 是否显示加载中
   * */
  ajax(url, params, more = {}) {
    // 处理参数
    let obj = apiConfig.processing(url, params);
    obj.data = params;
    return this.request(obj, more);
  }

  request(options, more) {
    if (!options) {
      return;
    }

    let params = {};

    if (typeof options === 'string') {
      params.url = config.serverUrl + options;
      params.method = 'GET';
    } else if (typeof options === 'object') {
      if (!options.url) {
        return;
      }

      params.url = config.serverUrl + options.url;
      params.method = options.method || 'GET';//默认get
      params.data = options.data || {};
    }

    return new Promise(async (resolve, reject) => {
      let header = {
        "Content-Type": "application/json",
      };
      let $token = await uni.$API.UserAuth.getUserInfo();
      if ($token && $token.data) {
        header['Authorization'] = $token.data;
      }
      let opt = Object.assign(params, {
        header,
        complete: res => {
          if (more && more.loading) { // 判断是否需要loading,有就关闭
            uni.$co.Fun.hideLoading();
          }
          let currentPagesInfo = getCurrentPages();
          if (res && res.statusCode === 200) { // 获取成功
            console.log('res==', res);
            let {data} = res;
            data.code = Number(data.code);
            if (data.code !== 1) {
              uni.$co.Fun.showToast(data.msg);
              // ... 这里可以统一处理一些方法  例如：token失效问题
              /**
               * 20001  用户令牌失效
               * */
              let codeList = [20001];
              if (codeList.includes(data.code)) {
                //console.log('currentPagesInfo===', currentPagesInfo);
                //是否需要跳转登录
                if (!(currentPagesInfo && currentPagesInfo.length && [currentPagesInfo[0].route].includes('login'))) {
                  setTimeout(_ => {
                    uni.$co.Fun.toPage('login');
                  }, 1200);
                }
              }
            }
            console.log('结果：', options.url, res.data)
            resolve(res.data)
          } else if (res && res.statusCode === 404) {
            // ... 页面 404
          } else {//获取失败
            reject(res);
          }
        }
      });
      if (more && more.loading) { // 判断是否需要loading
        uni.$co.Fun.showLoading();
      }
      uni.request(opt);
    });
  }
}

module.exports = new Ajax();
