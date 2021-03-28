const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  const config = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.s?css$/i,
          use: [
            isProduction
              ? MiniCssExtractPlugin.loader
              : "style-loader", "css-loader",
            "sass-loader"
          ],
        },
        {
          test: /\.(jpg|png)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                outputPath: "images",
                limit: 8192,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      // new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
    devServer: {
      port: 9000,
      hot: true,
    },
    // stats: {
    //   children: true,
    // },
  };
  return config;
};
