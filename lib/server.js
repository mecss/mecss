var bs = require("browser-sync").create();

/**
 * This example will serve files from the './app' directory
 * and will automatically watch for html/css/js changes
 */
bs.init({
    watch: true,
    baseDir: './src',
    server: "./public"
});

bs.watch('./src/**/*.scss', () => bs.reload())