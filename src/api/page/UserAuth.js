import config from "@/config";

/** 获取本地的用户信息*/
function getUserInfo() {
  return new Promise((resolve, reject) => {
    /** 通过config配置的用户信息存储key*/
    uni.sessionStorage.get(config.setStorageSyncField.userInfo).then(res => {
      if (res) {
        resolve(res);
      } else {
        reject(false)
      }
    }).catch(_ => {
      resolve(false);
    })
  });
}

const auth = {
  getUserInfo,
};
export default auth;
