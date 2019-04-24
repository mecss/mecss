const fs = require('fs');
var sass = require('node-sass');
const Data = require('./Data')

class Core {
    constructor() {
        this.sassInput = `./src/styles/master.me.scss`
        this.input = `./build/style.me.css`
        this.output = `./build/style.css`
    }
    handleSassInput() {
        sass.render({
            file: this.sassInput,
            outFile: this.input,
            outputStyle: `compressed`
        }, (err, res) => { 
            if (err) thro< err
            else fs.writeFile(this.input, res.css, err => {
                if (err) throw (err);
                else this.handleMeinput()
            });
        });
    } 
    handleMeinput() {
        console.log(`✅  | Sass converted.`)
        fs.readFile(this.input, `utf8`, (err, data) => {
            if (err) throw err;
            else {
                for (let i = 0; i < Data.length; i++) {
                    const x = Data[i];
                    var reg = new RegExp(x.in, `g`);
                    data = data.replace(reg, x.out)
                }
                fs.writeFile(this.output, data, `utf8`, err => {
                    if (err) throw err;
                    else fs.unlink(this.input, err => {
                        if (err) throw err
                        else console.log(`✅  | me files converted, exported & deleted`)
                    });
                });
            }
        });   
    }
}

module.exports = Core;