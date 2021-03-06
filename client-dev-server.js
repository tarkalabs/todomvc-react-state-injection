var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");
var path = require("path");

new WebpackDevServer(webpack(config), {
  contentBase: path.join(__dirname, "public"),
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(4000, "localhost", function (err) {
  if (err) { console.log(err); }
  console.log("Listening at localhost:4000");
});
