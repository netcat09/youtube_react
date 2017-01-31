module.exports = {

    entry: './app.js',

    output: {

        filename: 'bundle.js'

    },

    module: {

        loaders: [{

            test: /\.jsx?$/,

            loader: 'babel',

            query: {

                presets: ['react', 'es2015'],
                plugins: ['transform-decorators-legacy', 'transform-object-rest-spread']

            }

        }]

    }

};