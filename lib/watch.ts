import * as fs from 'fs';
const bs = require(`browser-sync`).create();

const Core = require(`./Core`);

class Watch {
    public scssInput: any;
    public publicPath: any;
    constructor() {
        this.scssInput = process.env.SCSS_MASTER;
        this.publicPath = process.env.PUBLIC;
    }
    public start() {
        if (!fs.existsSync(this.publicPath)) fs.mkdirSync(this.publicPath);
        bs.init({
            baseDir: process.env.SRC,
            server: this.publicPath,
        });
        bs.watch(process.env.SCSS_FILES, (watchState: string) => {
            const newCore = new Core(watchState);
            newCore.start();
            bs.reload();
        });
        this.triggerFirstWatch();
    }
    public triggerFirstWatch() {
        fs.appendFile(this.scssInput, `//w`, `utf8`, err => {
            if (err) throw err;
            else fs.readFile(this.scssInput, `utf8`, (err2, data) => {
                if (err2) throw err2;
                const result = data.replace(/\/\/w/g, ``);
                fs.writeFile(this.scssInput, result, `utf8`, err3 => {
                    if (err3) throw err3;
                });
            });
        });
    }
}

const meWatch = new Watch();
meWatch.start();
