const bs  = require(`browser-sync`);
const fs  = require(`fs`);


const Core = require(`./Core`);


class Watch {
    private publicDir: string | undefined;
    private scssFiles: string | undefined;
    private scssInput: string | undefined;
    private srcDir: string | undefined;
    constructor() {
        this.publicDir = process.env.PUBLIC;
        this.scssFiles = process.env.SCSS_FILES;
        this.scssInput = process.env.SCSS_MASTER;
        this.srcDir = process.env.SRC;
    }
    private triggerFirstWatch() {
        fs.appendFile(this.scssInput, `//w`, `utf8`, (err: boolean) => {
            if (err) throw err;
            else fs.readFile(this.scssInput, `utf8`, (err: boolean, data: string) => {
                if (err) throw err;
                const result = data.replace(/\/\/w/g, ``);
                fs.writeFile(this.scssInput, result, `utf8`, (err: boolean) => {
                    if (err) throw err;
                });
            });
        });
    }
    public start() {
        bs.create();
        if (!fs.existsSync(this.publicDir)) fs.mkdirSync(this.publicDir);
        bs.init({
            baseDir: this.srcDir,
            server: this.publicDir,
            port: 1234,
        });
        bs.watch(this.scssFiles, (watchState: string, file: string) => {
            const newCore = new Core(watchState, file);
            newCore.start();
            console.clear();
            bs.reload();
        });
        this.triggerFirstWatch();
    }
}

const meWatch = new Watch();
meWatch.start();


export{};
