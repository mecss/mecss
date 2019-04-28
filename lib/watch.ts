const bs  = require(`browser-sync`);
const fs  = require(`fs`);

bs.create();

import Core from './Core';

class Watch {
    public scssInput: any;
    public publicPath: any;
    public src: any;
    public scssFiles: any;
    constructor() {
        this.scssInput = process.env.SCSS_MASTER;
        this.publicPath = process.env.PUBLIC;
        this.src = process.env.SRC;
        this.scssFiles = process.env.SCSS_FILES;
    }
    public start() {
        if (!fs.existsSync(this.publicPath)) fs.mkdirSync(this.publicPath);
        bs.init({
            baseDir: `./src`,
            port: 1234,
            server: this.publicPath,
        });
        bs.watch(this.scssFiles, (watchState: string) => {
            const newCore = new Core(watchState);
            newCore.start();
            bs.reload();
        });
        this.triggerFirstWatch();
    }
    public triggerFirstWatch() {
        fs.appendFile(this.scssInput, `//w`, `utf8`, (err: any) => {
            if (err) throw err;
            else fs.readFile(this.scssInput, `utf8`, (err: any, data: any) => {
                if (err) throw err;
                const result = data.replace(/\/\/w/g, ``);
                fs.writeFile(this.scssInput, result, `utf8`, (err: any) => {
                    if (err) throw err;
                });
            });
        });
    }
}

const meWatch = new Watch();
meWatch.start();