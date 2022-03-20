module.exports = {
    mode: 'development',
    entry: ['./client/index.js'],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
      },
    context: __dirname,
    module: {
      rules: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      ]
    }
  }
  