const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@app': path.resolve(__dirname, 'src/app/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@layouts': path.resolve(__dirname, 'src/layouts/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@context': path.resolve(__dirname, 'src/context/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
          }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ]
}