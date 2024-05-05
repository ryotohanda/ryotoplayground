const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './' //npm run build で生成された　distディレクトリのindex.jsのパス指定の調整
  //参考：https://qiita.com/kohecchi/items/5d06936745118045a308
})
