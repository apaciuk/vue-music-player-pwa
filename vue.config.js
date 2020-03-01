//Use Examples//

/*var webpack = require('webpack');
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
      })
    ]
  }
} if you like extra drama!*/

/* Or more likely*/
/* vue.config.js
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  }
}*/


/*Or Lodash*/

/*var webpack = require('webpack');
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
  _map: ['lodash', 'map']
      })
    ]
  }
}*/

//or chainWebpack:
