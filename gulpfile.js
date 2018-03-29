var gulp = require('gulp')
var fs = require('fs')
var path = require('path')

// /project_skeleton
var root ='./'
gulp.task('default',()=>{
  console.log('创建项目骨架')
  fs.mkdirSync(path.join(root,'app'))
  fs.mkdirSync(path.join(root,'app/css'))
  fs.mkdirSync(path.join(root,'app/fonts'))
  fs.mkdirSync(path.join(root,'app/images'))
  fs.mkdirSync(path.join(root,'app/scss'))
  fs.mkdirSync(path.join(root,'dist'))
  fs.createWriteStream(path.join(root,'app','index.html'))
  console.log('完成')

})
