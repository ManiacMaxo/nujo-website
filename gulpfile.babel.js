import gulp from 'gulp'
import sass from 'gulp-sass'
import cssnano from 'cssnano'
import sourcemaps from 'gulp-sourcemaps'
import browser from 'browser-sync'
import uglify from 'gulp-uglify'
import gulpIf from 'gulp-if'
import rimraf from 'rimraf'
import imagemin from 'gulp-imagemin'
import cache from 'gulp-cache'
import webpackStream from 'webpack-stream'
import yargs from 'yargs'
import panini from 'panini'

const PRODUCTION = !!yargs.argv.production

gulp.task(
    'build',
    gulp.series(clean, gulp.parallel(pages, scss, js, copy)),
    () => {
        console.log('Building files')
    }
)
gulp.task('default', gulp.series('build', server, watch))

function scss() {
    return gulp
        .src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gulpIf(PRODUCTION, cssnano()))
        .pipe(gulpIf(!PRODUCTION, sourcemaps.write()))
        .pipe(gulp.dest('dist/css'))
        .pipe(browser.reload({ stream: true }))
}

function js() {
    return gulp
        .src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(
            webpackStream({
                mode: 'production',
                output: { filename: '[name].bundle.js' },
            })
        )
        .pipe(gulpIf(PRODUCTION, uglify()))
        .pipe(gulpIf(!PRODUCTION, sourcemaps.write()))
        .pipe(gulp.dest('dist/js'))
}

function images() {
    return gulp
        .src('src/assets/img/**/*.+(png|jpg|jpeg|gif|svg|webp)')
        .pipe(cache(imagemin({ interlaced: true })))
        .pipe(gulp.dest('dist/assets/img'))
}

function clean(done) {
    rimraf('dist', done)
}

function copy() {
    return gulp.src('src/assets/**/*').pipe(gulp.dest('dist/assets'))
}

function pages() {
    return gulp
        .src('src/pages/**/*.{html,hbs,handlebars}')
        .pipe(
            panini({
                root: 'src/pages/',
                layouts: 'src/layouts/',
                partials: 'src/partials/',
            })
        )
        .pipe(gulp.dest('dist'))
}

function resetPages(done) {
    panini.refresh()
    done()
}

function server(done) {
    browser.init({
        server: 'dist',
        port: 3005,
    })
    done()
}

function watch() {
    gulp.watch('src/assets/**/*', copy)
    gulp.watch('src/{layouts,partials,pages}/**/*.html').on(
        'all',
        gulp.series(resetPages, pages, browser.reload)
    )
    gulp.watch('src/scss/**/*.scss').on('all', scss)
    gulp.watch('src/js/**/*.js').on('all', gulp.series(js, browser.reload))
    gulp.watch('src/assets/img/**/*').on(
        'all',
        gulp.series(images, browser.reload)
    )
}
