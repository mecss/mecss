const fs = require('fs');
var bs = require("browser-sync").create();

const Core = require('./Core');

class Watch {
    static init() {
        if (!fs.existsSync(process.env.PUBLIC)) fs.mkdirSync(process.env.PUBLIC);
        bs.init({
            baseDir: process.env.SRC,
            server: process.env.PUBLIC
        });
        bs.watch(process.env.SCSS_FILES, (watchState) => {
            const newCore = new Core(watchState);
            newCore.start();
            bs.reload();
        })
        fs.appendFile(process.env.SCSS_MASTER, ' ',  'utf8', (err) => {
            if (err) throw err;
        })
    }
}

Watch.init();