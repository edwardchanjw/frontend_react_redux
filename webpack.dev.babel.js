import webpack from 'webpack';

export default {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: './dist/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              "presets": [["es2015", {"modules": false}], "react"]
            }
          }
        ]
      }
    ]
  },
  watch: true,
};
