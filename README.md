# shark CSS 样式库 [shark-css](http://shark.mail.netease.com/yanxuan/index.html#/projectPreview/index)

<!-- **更新日志** 请在使用项目或提交 issue 之前，查看项目 [更新日志](https://git.mail.netease.com/shark/shark-angularX/releases), 获取更新近况。 -->

## 安装使用

`shark-css` 已在 [ppnpm](http://npm.mail.netease.com/package/@shark/shark-css) 发布

**开发依赖安装**

    npm install @shark/shark-css --registry=http://npm.mail.netease.com/registry/

**开发版尝鲜**

    //adding the @next version
    git clone git@git.mail.netease.com:shark/shark-css.git

随后目录中执行

    # 安装项目依赖
    $ npm install --registry=http://npm.mail.netease.com/registry/
    # 预编译第三方依赖文件
    $ npm run dll
    # 启动本地服务，可通过配置 `shark-deploy-conf.js` 修改启动服务器信息
    $ npm run server

> 项目尝鲜中遇到的问题，请反馈到项目所在 [issues](https://git.mail.netease.com/shark/shark-css/issues).

## 项目简介

### 视觉规范

网易严选-管理后台交互视觉规范：[内网地址](http://10.240.140.37/~yanxuanios/UX%20DOC/%E7%BD%91%E6%98%93%E4%B8%A5%E9%80%89-%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0%E4%BA%A4%E4%BA%92%E8%A7%86%E8%A7%89%E8%A7%84%E8%8C%83/)

### 项目文件结构

```
├── docs                            // 样式 demo 
├── scss                            // 样式源码
├── server.js                       // 开发服务器
├── shark-deploy-conf.js            // 开发服务器配置项
├── webpack.dev.config.js           // 开发webpack dev 配置文件
└── webpack.dll.config.js           // 开发webpack dll 配置文件 npm run dll 会读取此文件配置
```

### 样式用法示例

安装 `shark-css` 到项目中后，在主样式文件中引入 `@shark/shark-css/scss/sharkpure` 即可
具体的使用方式，建议参考模板工程进行项目开发。

## 模板工程

可以查看模板工程来获得项目脚手架， [shark-angularx-template](https://git.mail.netease.com/shark/shark-angularx-template)

## Roadmap
