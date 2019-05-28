# 功能挺全的，就是有点丑

# ionic4_angular7_elm
基于ionic4 + ng7构建一个具有 30+ 页面的大型单页面应用（master必须使用ionic v4,已升级到v4正式版）

[阿里移动端组件库ng-zorro-antd-mobile开源地址](https://github.com/NG-ZORRO/ng-zorro-antd-mobile)，将在zorro分支逐步使用zorro-antd-mobile组件替换重构，感兴趣的可以直接使用zorro分支（重构中，未完成）

基于ionic3 + ng5 构建一个具有 30+ 页面的大型单页面应用(请使用v3分支，必须使用ionic v3才能启动)
借鉴了[@bailicangdu](https://github.com/bailicangdu/vue2-elm) vue-elm项目，已征得其本人同意，[后台传送地址](https://github.com/bailicangdu/node-elm)

## 生成apk

1. 生成未签名apk
```
ionic cordova build android --prod --release
```
2. 制作签名文件
```
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```
3. apk签名
```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name
```
4. 打包
```
zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk
```


## 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，node 需要 6.0 以上版本 

```
npm install -g cordova ionic // 需要全局安装cordova ionic

git clone https://github.com/nuonuoge/ionic4_angular6_elm.git  

cd ionic4_angular6_elm

npm install

npm start

```
## 另外
此项目有配套的后台系统，如果想体验前后台同时开发，可以下载对应的后台系统：[后台项目传送地址](https://github.com/bailicangdu/node-elm)。

如果只做前端开发，请忽略这句话。


# 说明

>  暂时没有体验地址，待所有功能完成后再发布，可以去[vue-elm发布地址体验](http://cangdu.org/elm/)（请用chrome手机模式预览）

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

>  推荐一个 react + redux 开源项目，对react感兴趣的朋友赶紧去看看。[地址在这里](https://github.com/bailicangdu/react-pxq)

>  另外一个 vue2 + vuex 的elm项目。[地址在这里](https://github.com/bailicangdu/vue2-elm)



# License

GPL
