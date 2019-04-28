
const fs = require(`fs`);
const sass = require(`node-sass`);
require(`dotenv`).config();

const Data = require(`./Data`);

class Core {
    private input: string | undefined;
    private output: string | undefined;
    private scssInput: string | undefined;
    private watchState: string;
    constructor(watchState: string) {
        this.input = process.env.CSS_INPUT;
        this.output = process.env.CSS_OUTPUT;
        this.scssInput = process.env.SCSS_MASTER;
        this.watchState = watchState;
    }
    public handleSassFiles() {
        sass.render({
            file: this.scssInput,
            outFile: this.input,
            outputStyle: `compressed`,
        }, (err: boolean, res: { css: object }) => {
            if (err) throw err;
            else fs.writeFile(this.input, res.css, (err: boolean) => {
                if (err) throw (err);
                else {
                    this.handleMeFiles();
                    console.log(`👁  | 1 Sass file watched`);
                }
            });
        });
    }
    private handleMeFiles() {
        fs.readFile(this.input, `utf8`, (err: boolean, data: string) => {
            if (err) throw err;
            else {
                Data.map((x: { in: string, out: string }) => {
                    const reg = new RegExp(x.in, `g`);
                    data = data.replace(reg, x.out);
                });
                fs.writeFile(this.output, data, `utf8`, (err: boolean) => {
                    if (err) throw err;
                    else this.deleteUselessFiles();
                });
            }
        });
    }
    private deleteUselessFiles() {
        if (!this.watchState || this.watchState === `change`) fs.unlink(this.input, (err: boolean) => {
            if (err) throw err;
            else console.log(`✅  | mecss file watched`);
        });
    }
    public start() {
        this.handleSassFiles();
    }
}

export default Core;
