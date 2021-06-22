<br><br><br>
[uPlus](https://gitee.com/uplus-framework/uplus.git) 是一个uniApp前端解决方案，它基于 [vue](https://github.com/vuejs/vue) 和 [uni-app](https://uniapp.dcloud.io/) 实现。它有动态修改主题、动态路由获取、路由守卫、路由浏览轨迹，权限验证、错误记录，提炼了典型的业务场景，提供了丰富的功能方法，它可以帮助你快速搭建uniApp基础架构，希望本项目都能帮助到你。


<br/>

## 功能

```

- 多环境发布
  - config-env.js 自定义多环境并使用

- 全局功能
  - 多种动态换肤
  - 动态底部栏（通过更改路由配置）
  - iconfont 自定义图标
  - uni.$co 自动生成$co
  - uni.$API 自动生成$API列表
  - uni.$dic 自动生成字典
  - 动态更改路由权限
  - store 自动生成(通用的赋值方式)
  - filters (通用filters)
  - 主题theme-style样式

- 错误页面
  - 401
  - 404

- 路由守卫
  - 自定义守卫事件

- 错误日志
- 路由轨迹
- 通用组件

```

<br/>

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [uni-app](https://uniapp.dcloud.io/)，提前了解和学习这些知识会对使用本项目有很大的帮助。

### 如果可以，请点个星星支持一下


## 在线文档地址

[UPlus 在线文档](http://uplus.evue.top/)


## 预览

![](https://i.postimg.cc/yNVps9nW/29-9a05dbe3d214c191bda05d6d558e582a-9f0ed86ddc4aa5db9ae641c342f227b2.png) <br> <br> 
 ### [直接跳转预览](http://view-uplus.evue.top/#/)


## 目录结构

本项目已经为你生成了一个完整的开发框架，下面是整个项目的目录结构。

```bash
├── public                                             # f# 静态资源
│   │── favicon.ico                                    # avicon图标
│   └── index.html                                     # html模板
├── src                                                # 源代码
│   ├── api                                            # API 相关
│       ├── page                                       # API模块文件（里面文件首字母大写）
│       ├── index.js                                   # 自动生成page里面所有API，绑定在uni.$API
│   ├── components                                     # 组件 全局公用组件
│   ├── config                                         # 全局配置入口
│       ├── env.js                                     # 环境配置
│       ├── index.js                                   # 全局配置
│       ├── setStorageSync-field.js                    # 全局本地缓存字段配置
│   ├── filters                                        # 全局 filter
│   ├── layout                                         # 全局 layout
│   ├── mixins                                         # 混入对象 mixins
│   ├── router                                         # 路由 守卫
│   ├── store                                          # 全局 store管理
│       ├── modules                                    # store模块文件（里面文件首字母大写）
│       ├── index.js                                   # 自动生成modules里面所有store
│   ├── styles                                         # 全局样式
│       ├── base.scss                                  # 默认基础样式
│       ├── font.scss                                  # iconfont图标样式
│       ├── index.scss                                 # 全局公用样式入口
│       ├── minxin.scss                                # minxin样式
│       ├── var.scss                                   # 批量生成公用样式
│   ├── static                                         # 静态资源
│   ├── utils                                          # 全局公用方法
│       ├── resource                                   # 全局公用方法文件（里面文件首字母大写），绑定在uni.$co
│           ├── Common.js                              # 普通方法，例如：节流等uni.$co.Common
│           ├── Fun.js                                 # uniApp内部方法(常用)，例如：跳转等uni.$co.Fun
│       ├── error-log.js                               # 错误日记记录
│       ├── permission.js                              # 权限、路由轨迹等
│       ├── sessionStorage.js                          # 本地缓存公用方法 uni.sessionStorage
│   ├── pages                                          # pages 所有页面
│   ├── App.vue                                        # 入口页面
│   ├── main.js                                        # 入口文件 加载组件 初始化等
└── package.json                                       # package.json
└── vue.config.js                                      # vue config文件
└── ....                                               # 其他
```

## 安装

```bash
# 克隆项目
git clone https://gitee.com/uplus-framework/uplus.git

# 进入项目目录
cd uplus

# 安装依赖
npm install


# 本地开发 启动项目
npm run serve
```

<br/>

启动完成后会自动打开浏览器访问 [http://localhost:8080](http://localhost:8080)， 你看到下面的页面就代表操作成功了。

![](https://s1.imagehub.cc/images/2021/06/11/FireShot-Capture-013------QQ_2052021114---10.152.78.584f7dba9d79397654.png)

## Contribution


[uPlus](https://gitee.com/uplus-framework/uplus.git) 还在持续迭代中，逐步沉淀和总结出更多功能和不同的场景。本项目也十分期待你的参与和[反馈](http://uplus.evue.top/comment/) ，或联系我QQ: 2052021114

<br/>
有任何修改和建议都可以该项目 pr 和 issue

## 捐赠

如果你觉得这个项目帮助到了你，你可以帮作者买一杯果汁表示鼓励 :heart:

![](http://wangzheshike.xxgushi.com/uni-app/donation.png)

## 其它

QQ群：<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=PL7gMOakpTDfMdnOvMxpugE93iS3yg5y&jump_from=webapi">633325423</a>

## Vue 生态圈

1. [Vue Router](https://router.vuejs.org/) 是 vue 官方的路由。它能快速的帮助你构建一个单页面或者多页面的项目。

2. [Vuex](https://vuex.vuejs.org/) 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。它能解决你很多全局状态或者组件之间通信的问题。

3. [Vue Loader](https://vue-loader.vuejs.org) 是为 vue 文件定制的一个 webpack 的 loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件。它能在开发过程中使用热重载来保持状态，为每个组件模拟出 scoped CSS 等等功能。不过大部分情况下你不需要对它直接进行配置，脚手架都帮你封装好了。

4) [Vue Test Utils](https://vue-test-utils.vuejs.org/) 是官方提供的一个单元测试工具。它能让你更方便的写单元测试。

5) [Vue Dev-Tools](https://github.com/vuejs/vue-devtools) Vue 在浏览器下的调试工具。写 vue 必备的一个浏览器插件，能大大的提高你调试的效率。

6) [Vue CLI](https://cli.vuejs.org/) 是官方提供的一个 vue 项目脚手架，本项目也是基于它进行构建的。它帮你封装了大量的 webpack、babel 等其它配置，让你能花更少的精力在搭建环境上，从而能更专注于页面代码的编写。不过所有的脚手架都是针对大部分情况的，所以一些特殊的需求还是需要自己进行配置。建议先阅读一遍它的文档，对一些配置有一些基本的了解。

7) [Vetur](https://github.com/vuejs/vetur) 是 VS Code 的插件. 如果你使用 VS Code 来写 vue 的话，这个插件是必不可少的。


## Uni App 生态圈

1. [uniApp](https://uniapp.dcloud.io/) 是 uni app 教程和api文档。