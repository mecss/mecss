const fs = require('fs');
var sass = require('node-sass');
const Data = require('./Data')

class Core {
    constructor(watchState, total) {
        this.watchState = watchState;
        this.total = total;
        this.sassInput = `./src/styles/master.me.scss`
        this.input = `./public/style.me.css`
        this.output = `./public/style.css`
    }
    handleSassFiles() {
        sass.render({
            file: this.sassInput,
            outFile: this.input,
            outputStyle: `compressed`
        }, (err, res) => { 
            if (err) throw err
            else fs.writeFile(this.input, res.css, err => {
                if (err) throw (err);
                else this.handleMeFiles()
            });
        });
    } 
    handleMeFiles() {
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
                    else this.deleteUselessFiles()
                });
            }
        });   
    }
    deleteUselessFiles() {
        if (!this.watchState || this.watchState === 'change') {
            fs.unlink(this.input, err => {
                if (err) throw err
                else console.log(`✅  | me files converted, exported & deleted`)
            });
        }
    }
    start() {
        this.handleSassFiles()
    }
}

module.exports = Core;