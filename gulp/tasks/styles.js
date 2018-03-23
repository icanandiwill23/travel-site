const gulp         = require("gulp"),
      postcss      = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      cssvars      = require("postcss-simple-vars"),
      nested       = require("postcss-nested"),
      mixins       = require("postcss-mixins"),
      cssImport    = require("postcss-import");

gulp.task("styles", function(){
  gulp.src("./app/assets/styles/styles.css")
  .pipe(postcss([cssImport, mixins, nested, autoprefixer, cssvars]))
  .on("error", function(errorInfo){
    console.log(errorInfo.toString());
    this.emit("end");
  })
  .pipe(gulp.dest("./app/temp/styles"));
});
