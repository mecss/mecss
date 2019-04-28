import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as sass from 'node-sass';

import Data from './Data';

dotenv.config();

class Core {
    public watchState: any;
    public scssInput: any;
    public input: any;
    public output: any;
    constructor(watchState: any) {
        this.watchState = watchState;
        this.scssInput = process.env.SCSS_MASTER;
        this.input = process.env.CSS_INPUT;
        this.output = process.env.CSS_OUTPUT;
    }
    public handleSassFiles() {
        sass.render({
            file: this.scssInput,
            outFile: this.input,
            outputStyle: `compressed`,
        }, (err, res) => {
            if (err) throw err;
            else fs.writeFile(this.input, res.css, err2 => {
                if (err2) throw (err2);
                else {
                    this.handleMeFiles();
                    console.log(`👁  | 1 Sass file watched`);
                }
            });
        });
    }
    public handleMeFiles() {
        fs.readFile(this.input, `utf8`, (err, data) => {
            if (err) throw err;
            else {
                Data.map(x => {
                    const reg = new RegExp(x.in, `g`);
                    data = data.replace(reg, x.out);
                });
                fs.writeFile(this.output, data, `utf8`, err2 => {
                    if (err2) throw err2;
                    else this.deleteUselessFiles();
                });
            }
        });
    }
    public deleteUselessFiles() {
        if (!this.watchState || this.watchState === `change`) fs.unlink(this.input, err => {
            if (err) throw err;
            else console.log(`✅  | mecss file watched`);
        });
    }
    public start() {
        this.handleSassFiles();
    }
}

export default Core;
