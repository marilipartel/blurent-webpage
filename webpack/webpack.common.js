"use strict";

const Path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dest = Path.join(__dirname, "../dist");

module.exports = {
  entry: [
    //Path.resolve(__dirname, './polyfills'),
    Path.resolve(__dirname, "../src/scripts/index"),
  ],
  output: {
    path: dest,
    filename: "bundle.[hash].js",
  },
  plugins: [
    new CleanWebpackPlugin([dest], { root: Path.resolve(__dirname, "..") }),
    // new CopyWebpackPlugin([
    //   { from: Path.resolve(__dirname, '../public'), to: 'public' }
    // ]),
    new CleanWebpackPlugin([dest], { root: Path.resolve(__dirname, "..") }),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, "../assets"), to: "assets" },
    ]),
    // new HtmlWebpackPlugin({
    //   template: Path.resolve(__dirname, '../src/index.html')
    // }),
    new HtmlWebpackPlugin({
      title: "* Home *",
      page: "index",
      filename: "index.html",
      template: "src/templates/home.html",
    }),
    new HtmlWebpackPlugin({
      title: "* About *",
      page: "about",
      filename: "about/index.html",
      template: "src/templates/default.html",
    }),
    new HtmlWebpackPlugin({
      title: "* Featured *",
      page: "featured",
      filename: "featured/index.html",
      template: "src/templates/carousel.html",
    }),
    new HtmlWebpackPlugin({
      title: "* Product *",
      page: "product",
      filename: "product/index.html",
      template: "src/templates/default.html",
    }),
  ],
  resolve: {
    alias: {
      "~": Path.resolve(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: "file-loader",
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      },
    ],
  },
};
