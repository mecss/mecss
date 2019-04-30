const chalk = require(`chalk`);
const fs = require(`fs`);
const path = require(`path`);
const sass = require(`node-sass`);
require(`dotenv`).config();

const Data = require(`./data/Data`);

class Core {
    private aliasLength: number;
    private aliasFounded: number;
    private input: string | undefined;
    private output: string | undefined;
    private scssInput: string | undefined;
    private watchedFile: string;
    private watchState: string;

    constructor(watchState: string, watchedFile: string) {
        this.aliasLength = 0;
        this.aliasFounded = 0;
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
                            this.aliasLength++;
                            const reg = new RegExp(x.in, `g`);
                            data = data.replace(reg, () => {
                                this.aliasFounded++;
                                return x.out;
                            });
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
    private getAliasFounded() {
        return console.log(chalk.hex(`#C76161`).bold(`[mecss]`) +  chalk.hex(`#5fcc9e`).bold(` ${this.aliasFounded}`) + ` CSS aliases founded in` + chalk.hex(`#5fcc9e`).bold(` ${process.env.SRC}`));
    }
    private getAliasLength() {
        return console.log(chalk.hex(`#C79161`).bold(`[db]`) + ` contain` + chalk.hex(`#5fcc9e`).bold(` ${this.aliasLength}`) + ` types of CSS aliases`);
    }
    private deleteUselessFiles() {
        if (!this.watchState || this.watchState === `change`) fs.unlink(this.input, (err: boolean) => {
            if (err) throw err;
            else {
                this.getAliasFounded();
                this.getAliasLength();
                this.watchState ? console.log(chalk.hex(`#cacc5f`).bold(`[watch]`) + chalk.hex(`#5fcc9e`).bold(` ${path.basename(this.watchedFile)}`) +  ` watched & compiled`) : undefined;
            }
        });
    }
    public start() {
        this.handleSassFiles();
    }
}

export default Core;
