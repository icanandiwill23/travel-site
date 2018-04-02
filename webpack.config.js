const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: __dirname + "/app/assets/scripts/App.js",
  output: {
    path: __dirname +  "/app/temp/scripts",
    filename: "App.js"
  }
};
