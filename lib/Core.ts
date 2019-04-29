const chalk = require(`chalk`);
const fs = require(`fs`);
const path = require(`path`);
const sass = require(`node-sass`);
require(`dotenv`).config();

const Data = require(`./Data`);

class Core {
    private input: string | undefined;
    private output: string | undefined;
    private scssInput: string | undefined;
    private watchedFile: string;
    private watchState: string;

    constructor(watchState: string, watchedFile: string) {
        this.input = process.env.CSS_INPUT;
        this.output = process.env.CSS_OUTPUT;
        this.scssInput = process.env.SCSS_MASTER;
        this.watchedFile = watchedFile;
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
                else this.handleMeFiles();
            });
        });
    }
    private handleMeFiles() {
        fs.readFile(this.input, `utf8`, (err: boolean, data: string) => {
            if (err) throw err;
            else {
                for (const prop in Data) {
                    if (Data.hasOwnProperty(prop)) {
                        const props = Data[prop];
                        props.map((x: { in: RegExp; out: string; }) => {
                            const reg = new RegExp(x.in, `g`);
                            data = data.replace(reg, x.out);
                        });
                    }
                }
                fs.writeFile(this.output, data, `utf8`, (err: boolean) => {
                    if (err) throw err;
                    else {
                        this.deleteUselessFiles();
                    }

                });
            }
        });
    }
    private deleteUselessFiles() {
        if (!this.watchState || this.watchState === `change`) fs.unlink(this.input, (err: boolean) => {
            if (err) throw err;
            else this.watchState ? console.log(chalk.hex(`#cacc5f`).bold(`[watch]`) + chalk.hex(`#5fcc9e`).bold(` ${path.basename(this.watchedFile)}`) +  ` watched & compiled`) : undefined;
        });
    }
    public start() {
        this.handleSassFiles();
    }
}

export default Core;
