const path = require('path');

module.exports = {
    //define an entry point
    entry: ['./src/script-1.js'],
    
    //define output point

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'bundle.js',
        publicPath: "/"
    },

    mode: "development",

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                          }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    }
};