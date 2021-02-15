module.exports = {
    name: 'nujo website',
    script: 'serve',
    watch: true,
    env: {
        PM2_SERVE_PATH: './build',
        PM2_SERVE_PORT: 3001,
        NODE_ENV: 'production',
    },
}
