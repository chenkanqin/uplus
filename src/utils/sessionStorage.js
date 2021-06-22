import config from "../config";

/** 设置本地缓存*/
class SessionStorage {
  constructor() {
    this.expired = 60 * 60 * 24 * config.storageExpired; // 存活时间默认365天
  }

  set(name, value, expired = this.expired) {
    return new Promise((resolve, reject) => {
      if (name && value) {
        let timestamp = parseInt(new Date().getTime() / 1000);
        let objData = {
          data: value,
          expired: parseInt(timestamp + expired)
        };
        objData = JSON.stringify(objData);
        uni.setStorage({
          key: String(name).trim(),
          data: objData,
          success: function (res) {
            resolve(res);
          },
          complete(res) {
          },
          fail: function (res) {
            reject({code: -1, msg: '存储失败'});
          }
        })
      } else {
        reject('存储的name或data不能为空');
      }
    });

  }

  get(name) {//获取本地缓存
    return new Promise((resolve, reject) => {
      let timestamp = parseInt(new Date().getTime() / 1000);
      this._getItem(name).then(data => {
        try {
          data = JSON.parse(data);
        } catch (err) {
          data = {};
        }
        if (data.expired <= timestamp) { //存储过期
          this.remove(name).then(() => {
            resolve({});
          })
        } else {
          resolve(data);
        }
      }).catch(() => {
        reject({})
      })
    });
  }

  /** 私有方法，获取item*/
  _getItem(name) {
    return new Promise(((resolve, reject) => {
      uni.getStorage({
        key: String(name).trim(),
        success: function ($data) {
          resolve($data.data);
        },
        fail: function () {
          reject({});
        }
      })
    }))
  }

  /** 移除本地缓存*/
  remove(name) {
    return new Promise((resolve, reject) => {
      uni.removeStorage({
        key: String(name).trim(),
        complete() {
          resolve({});
        },
      });
    })
  }

  removeAll() {
    uni.clearStorageSync();
  }
}

export default new SessionStorage();
uni.sessionStorage = new SessionStorage();