import config from "@/config";
import {router} from '@/router'

class fun {
  /**
   * @desc 分享
   * page 分享路径 默认当前路径
   * params 分享参数 {}
   * imageUrl 图片路径 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。
   * title 分享标题 ’‘ 默认 标题
   * selfFun onShareAppMessage本身传过来的值
   * */

  shareAppMessage(options) {
    //当前路径
    let pages = getCurrentPages();
    let cp = pages[pages.length - 1].__route__;
    let $path = options.page ? options.page : cp;
    if (options.params) {
      let str = '';
      for (let i in options.params) {
        str += `&${i}=${options.params[i]}`;
      }
      $path += '?' + str.substr(1);
    }
    if (options.selfFun) {
      const selfFun = options.selfFun;
      if (selfFun.from === 'button') {
        // 来自页面内转发按钮
      }
    }
    let shareData = {
      title: options.title || config.title,
      imageUrl: options.imageUrl || null,
      path: $path
    };
    return shareData
  }

  //显示 loading 提示框
  showLoading(title = '加载中...') {
    uni.showLoading({
      title: title,
      mask: true
    })
  }

  //hide loading 提示框
  hideLoading() {
    uni.hideLoading();
    uni.stopPullDownRefresh();
  }

  // 消息提示框
  showToast(title = '即将开放', obj = {}) {
    let duration = obj.duration || 1500;
    uni.showToast({
      icon: 'none',
      duration,
      title,
      complete() {
        setTimeout(_ => {
          obj.complete && obj.complete();
        }, duration);
      }
    });
  }

  //显示模态对话框
  showModal(obj) {
    uni.showModal({
      title: obj && obj.title || '温馨提示',
      showCancel: obj && obj.showCancel,
      cancelColor: obj && obj.cancelColor || '#000',
      cancelText: obj && obj.cancelText || '取消',
      confirmColor: obj && obj.confirmColor || '#3cc51f',
      confirmText: obj && obj.confirmText || '确定',
      content: obj && obj.content || '',
      success(res) {
        if (res.confirm) {
          obj && obj.confirm && obj.confirm();
        } else if (res.cancel) {
          obj && obj.cancel && obj.cancel();
        }
      }
    })
  }

  //返回
  back(num = 1) {
    try {
      if (getCurrentPages() && getCurrentPages().length > 1) {
        uni.navigateBack({
          delta: num
        });
      } else {
        this.toPage('index');
      }
    } catch (e) {
      console.log('e==', e)
    }
  }

  /**
   * page -> config 声明的页面名称 或者完整路径，都可以
   * push  === navigateTo
   * replace  === redirectTo
   * pushTab  === switchTab
   * replaceAll  === reLaunch
   * back  === navigateBack
   * params 页面的参数 => Object -> pageType:跳转类型(push,replace,replaceAll,pushTab)   其他key是正常参数
   * */
  toPage(page, params) {
    let path = '';
    //查看路由表
    let currPage = config.pages.find(ro => ro.path === page);
    //路由配置
    let pathConfig = config.routes[page];
    if (!pathConfig && currPage && config.routes[currPage.name]) {
      pathConfig = config.routes[currPage.name];
    } else {
      path = pathConfig['path']
    }
    path = page.indexOf('/') > -1 ? page : path;
    if (!path) {
      this.toPage('404', {
        pageType: 'replace',
      });
      return false;
    }
    let pageType = 'push';
    let query = {};
    if (params) {
      // 拷贝
      params = JSON.parse(JSON.stringify(params))
      if (params.pageType) {
        pageType = params.pageType;
        delete params.pageType;
      }
      query = params;
    }
    if (pathConfig.pageParam && pathConfig.pageParam.tab) {
      pageType = 'replaceAll';
    }
    //console.log('router=', router[pageType], path);
    router[pageType]({
      path, query
    });
  }

  /**
   * $allImgAttr 要查看的图片数组
   * $index 图片索引
   * */
  previewImage($allImgAttr, $index) {
    uni.previewImage({
      current: $allImgAttr[$index] || 0,
      urls: $allImgAttr
    })
  }

  /** 获取dataset
   *  $isDetail 是否也需要返回detail
   * */
  getDataSet(ev, $isDetail = false) {
    if (!ev) return {};
    if ($isDetail) {
      return {
        dataset: ev.currentTarget.dataset,
        detail: ev.detail,
      }
    }
    return ev.currentTarget.dataset;
  }
}

export default new fun();
