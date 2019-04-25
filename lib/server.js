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
let count = 0
let watchStates = []
bs.watch('./src/**/*.scss',  (watchState) => {
    if (watchState === 'add') {
        count++
        watchStates.push(watchState)
    }
    const newCore = new Core(watchState, watchStates, count);
    newCore.start()
    
    bs.reload()
    // fs.unlink('./public/style.me.css', err => {
    //     if (err) throw err
    //     else console.log(`✅  | me files converted, exported & deleted`)
    // });
})
count = 0
watchStates = []