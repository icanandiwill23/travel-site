const gulp = require("gulp"),
      webpack = require("webpack");

gulp.task("scripts", function(){
  webpack({
      mode: "development",
      entry: __dirname  + "/../../app/assets/scripts/App.js",
      output: {
        path: __dirname +  "/../../app/temp/scripts",
        filename: "App.js"
      }
    }, (err, stats) => {
      if(err){
        console.log(err.toString());
      }
      console.log(stats.toString());
  });
});
