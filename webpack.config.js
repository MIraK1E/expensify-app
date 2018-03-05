// Require node path
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// for product 
module.exports = (env) => {
    const isProduction = env ==='production'
    const CSSExtract = new ExtractTextPlugin('styles.css')

    return {
        
        // Where is app excute by default
        entry: './src/app.js',

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
            CSSExtract
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