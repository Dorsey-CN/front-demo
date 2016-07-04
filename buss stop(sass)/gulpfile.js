var gulp = require('gulp');
var compass = require('gulp-compass');
var cssmin = require('gulp-clean-css');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var sequence = require('gulp-sequence');
var minifyHtml = require("gulp-minify-html");

gulp.task('sass', function() {
    return gulp.src('./sass/main.scss')
        .pipe(compass({
            config_file: './config.rb',
            sass: 'sass'
        })) //sass编译
        .pipe(cssmin()) //压缩
        .pipe(rev()) //md5命名
        .pipe(gulp.dest('css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev'));
});

gulp.task('rev', function() {
    return gulp.src(['./rev/*.json', './*.html'])
        .pipe(revCollector({ //替换css文件
            replaceReved: true
        }))
        .pipe(minifyHtml())
        .pipe(rev())
        .pipe(gulp.dest('./dist'));
});


gulp.task('default', sequence('sass', 'rev'));
