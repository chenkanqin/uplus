const currentService = 'prod';
const appConfig = {
  // 开发环境地址
  prod: {
    EVENTHOST: 'xxxx',
  },
  // .....其他环境地址
}
module.exports = {...appConfig[currentService], currentService}
