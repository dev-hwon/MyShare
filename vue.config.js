const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,
  lintOnSave:false,
  publicPath:'/guibundle' // git page 에 배포를 위한 코드
})
