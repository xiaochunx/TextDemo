/**
 * Created by W-Q on 2017/8/3.
 */
/**
 * 1.LESS的编译,压缩,合并
 */
var gulp = require("gulp");
var less = require("gulp-less");
var cleanCss = require("gulp-clean-css");


gulp.task("less", () => {
    gulp.src("./src/css/*.less")
        .pipe(less())
        .pipe(cleanCss())
        .pipe(gulp.dest("./dist/css/"))
        .pipe(browserSync.reload({
            stream: true
        }))
});


/**
 * 2.JS的压缩 合并 混淆
 */

var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task("test", function () {

    gulp.src("./src/js/*.js")
        .pipe(concat("all.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js/"))
        .pipe(browserSync.reload({
            stream: true
        }))

});

// 3.img的拷贝
gulp.task("copy", () => {
    "use strict";
    gulp.src("./src/img/*.*")
        .pipe(gulp.dest("./dist/img/"))
        .pipe(browserSync.reload({
            stream: true
        }))
});


// 4.html压缩
var htmlMin = require("gulp-htmlmin");

gulp.task("minify", () => {
    "use strict";
    gulp.src("./src/*.html")
        .pipe(htmlMin({collapseWhitespace: true, removeComments: true}))
        .pipe(gulp.dest("./dist/"))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// 5.启动监听器
var browserSync = require("browser-sync");

gulp.task("serve", () => {
    "use strict";
    browserSync(
        {server: {
            baseDir : ['dist'],
        }},
        function (err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });


    gulp.watch("./src/css/*.*",["less"]);
    gulp.watch("./src/js/*.js",["test"]);
    gulp.watch("./src/img/*.*",["copy"]);
    gulp.watch("./src/*.html",["minify"]);
})