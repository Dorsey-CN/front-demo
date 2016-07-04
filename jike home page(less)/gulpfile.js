var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer'); 
var rename = require('gulp-rename');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var sequence = require('gulp-sequence');
var minifyHtml = require("gulp-minify-html");
var imagemin = require('gulp-imagemin');

gulp.task('less',function() {                                //- 创建一个名为 concat 的 task
    return gulp.src('./style/main.less')
           .pipe(less())  //less编译
           .pipe(rename("style.css")) //重命名
           .pipe(cssmin())  //压缩
           .pipe(autoprefixer({
               browsers: ['last 2 versions'],
               cascade: false
           }))  //补充前缀
           .pipe(rev()) //md5命名
           .pipe(gulp.dest('./dist/css'))
           .pipe(rev.manifest())                  
           .pipe(gulp.dest('./rev'));
});

gulp.task('rev', function() {
    return gulp.src(['./rev/*.json', './*.html'])
        .pipe(revCollector({  //替换css文件
          replaceReved:true
        }))
        .pipe(minifyHtml())
        .pipe(rev())
        .pipe(gulp.dest('./dist'));
});

//压缩html文件
gulp.task('minifyHtml', function() {
    return gulp.src('./*.html')
        .pipe(minifyHtml())
        .pipe(rev()) 
        .pipe(gulp.dest('./dist'));
});

//将js文件放到/dist文件下
gulp.task('js', function () {
    return gulp.src('./js/*.js')
    .pipe(gulp.dest('./dist/js'))
});

//压缩图片
gulp.task('imagemin', function() {
    return gulp.src('./images/*.{png,jpg,jpeg,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));                
});

gulp.task('default', sequence('less','rev','js','imagemin'));
