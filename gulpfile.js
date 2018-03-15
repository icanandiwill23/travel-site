const gulp = require("gulp"),
      watch = require("gulp-watch");

gulp.task("default", function(){
  console.log("Default task");
});

gulp.task("html", function(){
  console.log("HTML has been changed");
});

gulp.task("styles", function(){
  console.log("CSS files has been changed");
});

gulp.task("watch", function(){
  watch("./app/index.html", function(){
    gulp.start("html");
  });

  watch("./app/assets/styles/**/*.css", function(){
    gulp.start("styles");
  });
});
