const fs = require('fs')
var bs = require("browser-sync").create();

const Core = require('./Core')





class Watch {
    static init() {
        if (!fs.existsSync(`./public`)) fs.mkdirSync(`./public`);
        bs.init({
            baseDir: './src',
            server: "./public"
        });
        bs.watch('./src/**/*/*.scss', (watchState) => {
            const newCore = new Core(watchState);
            newCore.start()
            bs.reload()
        })
        fs.appendFile('./src/styles/master.me.scss', ' ',  'utf8', (err) => {
            if (err) throw err;
        })
    }
}

Watch.init()