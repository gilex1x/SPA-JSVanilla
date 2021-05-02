//Manejamos las rutas en local y la nube (Es una 'herramienta de Node')
const path = require('path');
//Nos permite trabajar con archivos .html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },
    resolve:{
        extensions:['.js'],

    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                exclude: '/node_modules',
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin([
            {
                inject:true,
                template: './public/index.html',
                fielname: './index.html'
            }
        ])
    ]
}