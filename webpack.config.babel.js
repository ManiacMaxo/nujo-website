import path from 'path'

export default {
    mode: 'production',
    entry: {
        index: './src/js/index.js',
        features: './src/js/features.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
