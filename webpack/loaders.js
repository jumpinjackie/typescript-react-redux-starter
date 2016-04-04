'use strict';

exports.tslint = {
  test: /\.tsx?$/,
  loader: 'tslint',
  exclude: /node_modules/
};

exports.tsx = {
  test: /\.tsx?$/,
  loader: 'ts',
  exclude: /(node_modules|test-utils|\.test\.ts$)/
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/
};

exports.css = {
  test: /\.css$/,
  loader: 'style-loader!css-loader!postcss-loader'
};

exports.less ={
  test: /\.less$/,
  loader: 'style-loader!css-loader!less-loader'
};

exports.image = {
  test: /\.(png|jpg)$/,
  loader: "file-loader"
};

exports.svg = makeUrlLoader(/\.svg$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);

function makeUrlLoader (pattern) {
  return {
    test: pattern,
    loader: 'file-loader'
  };
}
