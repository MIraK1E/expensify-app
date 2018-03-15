// Require node path
const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// process.env.NODE_ENV = store our environment status
// config process.env.NODE_ENV if exist use it or change to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// check current environment status
if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' })
}

// for product 
module.exports = (env) => {
    const isProduction = env ==='production'
    const CSSExtract = new ExtractTextPlugin('styles.css')

    return {
        
        // Where is app excute by default
        // includes babel-polyfill
        entry: ['babel-polyfill', './src/app.js'],

         // Set where we put a big javascript file to run our application
        output: {

            // Use path join medthod to join 2 path together
            // __dirname is current path location
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },

        // setup module
        module: {
            rules: [{

                // set loader 
                loader: 'babel-loader',

                // flie type for loader to load
                test: /\.js$/,
                exclude: /node_modules/,
            },
            // second rule
            {
                 // file type for load
                test: /\.s?css$/,

                 // if file type match then load this 
                 use: CSSExtract.extract({
                     use: [
                         {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                         },
                         {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                         }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract,
            // pass down a value use in bundle
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MASSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MASSAGING_SENDER_ID)
            })
        ],
        // setup devtool for track error
        devtool: isProduction ? "source-map" : 'inline-source-map',

        // Object for develop server
        devServer: {

            // set as public path for our app
            contentBase: path.join(__dirname, 'public'),

             // set client side route
            historyApiFallback: true,

            publicPath: '/dist/'
        }
    }
}

// for a dev server
// module.exports = {
//     // Where is app excute by default
//     entry: './src/app.js',

//     // Set where we put a big javascript file to run our application
//     output: {

//         // Use path join medthod to join 2 path together
//         // __dirname is current path location
//         path: path.join(__dirname, 'public'),
//         filename: 'bundle.js'
//     },

//     // setup module
//     module: {
//         rules: [{

//             // set loader 
//             loader: 'babel-loader',

//             // flie type for loader to load
//             test: /\.js$/,
//             exclude: /node_modules/,
//         }, 
//         // second rule
//         {
//             // file type for load
//            test: /\.s?css$/,

//            // if file type match then load this 
//            use: [
//                'style-loader',
//                'css-loader',
//                'sass-loader'
//            ] 
//         }]
//     },
//     // setup devtool for track error
//     devtool: 'cheap-module-eval-source-map',

//     // Object for develop server
//     devServer: {

//         // set as public path for our app
//         contentBase: path.join(__dirname, 'public'),

//         // set client side route
//         historyApiFallback: true
//     }
// };