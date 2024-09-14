# lisp_app_zhengzhou

## 1.应用介绍：这是一个PDA手持端应用，用于管理库存，包括货物入库、出库、盘点、叫料等操作。

## 2.技术栈：[uni-app](https://uniapp.dcloud.net.cn/) + [vue3](https://cn.vuejs.org/)

## 3.编辑器：[HBuilderX](https://www.dcloud.io/hbuilderx.html) 该项目通过HBuilderX可视化界面交互式创建，HBuilderX内置相关环境，开箱即用，无需配置nodejs

## 4.项目目录

├─common                公共逻辑或样式存放目录
│  ├─css
│  │  └─common.css      项目公共样式
│  └─js
│     └─api.js          项目api接口
│     └─constant.js     项目静态常量
│     └─http.js         对uni.request进行二次封装
│     └─utils.js        公共方法
│─components            符合vue组件规范的uni-app组件目录
│  └─app-btn         
│     └─app-btn.vue  可复用的app-btn组件
│  └─app-input         
│     └─app-input.vue  可复用的app-input组件
│  └─app-logo         
│     └─app-logo.vue  可复用的app-logo组件
│  └─app-select         
│     └─app-select.vue  可复用的app-select组件
├─pages                 业务页面文件存放的目录(新增页面参考此规范创建)
│  ├─login
│  │  └─index.vue       登录页面
│  └─nav
│     └─index.vue       聚合页页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源都应存放于此目录
├─uni_modules           存放uni_module [详见](https://uniapp.dcloud.net.cn/plugin/uni_modules.html)
├─unpackage             非工程代码，一般存放运行或发行的编译结果
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─main.js               Vue初始化入口文件
├─pages.json            配置页面路由、导航条、选项卡等页面类信息，[详见](https://uniapp.dcloud.net.cn/collocation/pages.html)
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，[详见](https://uniapp.dcloud.net.cn/collocation/manifest.html)
└─uni.scss              内置的常用样式变量

## 5.项目服务器地址 baseUrl：'http://10.79.89.9:8040/ilsp'

## 发版
  在发布前，确保应用通过了所有测试，确保当前要发布的安装包版本号已经得到提升，并根据目标平台的要求进行打包和发布。
### 本项目的发布流程如下：
  1、取 `__UNI__04DE108__20240914130529.apk`文件(*修改名称，将原文件名称前缀 `__UNI__`修改为 `项目名_版本号_`，如 `ilsp-app_1.0.0_`。例如：将其重命名为 `ilsp-app_1.0.0_release.apk`。
  
  使用以下命令查看手机架构（确保已经安装好了ADB环境，以及连接手机或者PDA设备）:
  
  ```bash
  adb shell getprop ro.product.cpu.abi
  ```
  
  2、将该文件上传至已部署好的[APK应用管理平台](http://code.byd.com.cn/DLSS/ilsp-apk-server.git)