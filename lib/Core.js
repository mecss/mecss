const fs = require('fs');
var sass = require('node-sass');
const Data = require('./Data')

class Core {
    constructor(watchState, watchStates, count) {
        this.watchState = watchState;
        this.watchStates = watchStates;
        this.count = count
        this.bool = false
        this.sassInput = `./src/styles/master.me.scss`
        this.input = `./public/style.me.css`
        this.output = `./public/style.css`
    }
    handleSassFiles(c) {
        fs.readdir('./src/styles/', (err, files) => {
            if (err) throw err
            else {
                files.forEach(file => {
                  console.log(file);
                });

            }
          });
        console.log(this.count)
        console.log(this.watchStates)
        if (this.count)
        sass.render({
            file: this.sassInput,
            outFile: this.input,
            outputStyle: `compressed`
        }, (err, res) => { 
            if (err) throw err
            else fs.writeFile(this.input, res.css, err => {
                if (err) throw (err);
                else this.handleMeFiles(this.bool)
            });
        });
    } 
    handleMeFiles(c) {
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
                    else this.deleteUselessFiles(this.bool)
                });
            }
        });   
    }
    deleteUselessFiles(c) {
        console.log(c)
        console.log(this.bool)
        if (this.watchState === 'change') {
            fs.unlink(this.input, err => {
                if (err) throw err
                else console.log(`✅  one change`)
            });
        }
        if (this.watchState === 'add') {
            for (let i = 0; i < this.watchStates.length; i++) {
                const wtch = this.watchStates[i];
                if (wtch !== 'add') return
                else {
                    if (i === this.watchStates.length - 1) {
                        // fs.unlink(this.input, err => {
                        //     if (err) throw err
                        //     else console.log(`✅  | add files added`)
                        // });
                        console.log('y')
                    }
                }
                
            }
        }
    }
    start() {
        this.handleSassFiles()
    }
}

module.exports = Core;