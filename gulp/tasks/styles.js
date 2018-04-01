const gulp         = require("gulp"),
      postcss      = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      cssvars      = require("postcss-simple-vars"),
      nested       = require("postcss-nested"),
      mixins       = require("postcss-mixins"),
      cssImport    = require("postcss-import"),
      hexrgba      = require("postcss-hexrgba");

gulp.task("styles", function(){
  gulp.src("./app/assets/styles/styles.css")
  .pipe(postcss([cssImport, mixins, nested, autoprefixer, cssvars, hexrgba]))
  .on("error", function(errorInfo){
    console.log(errorInfo.toString());
    this.emit("end");
  })
  .pipe(gulp.dest("./app/temp/styles"));
});
