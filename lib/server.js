const fs = require('fs')
const path = require('path')
var bs = require("browser-sync").create();
var sass = require('node-sass');
const Data = require('./Data')

const Core = require('./Core')

/**
 * This example will serve files from the './app' directory
 * and will automatically watch for html/css/js changes
 */
bs.init({
    watch: true,
    baseDir: './src',
    server: "./public"
});
let total = 0;
bs.watch('./src/**/*/*.scss',  (watchState) => {
    const newCore = new Core(watchState);
    newCore.start()
    
    bs.reload()
    
})

fs.appendFile('./src/styles/master.me.scss', ' ',  'utf8', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
})
