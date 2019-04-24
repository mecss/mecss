const fs = require('fs');
const path = require('path')
var sass = require('node-sass');
const Data = require('./Data')

class Go {
    constructor() {
        this.input = `./src/styles/master.me.scss`
        this.output = `./build/style.me.css`
        this.buildput = `./build/style.css`
    }
    
    start() {
        sass.render({
            file: this.input,
            outFile: this.output,
            outputStyle: 'compressed'
        }, (err, res) => { 
            if (!err) {
                fs.writeFile(this.output, res.css, err => {
                    if (err) {
                        console.log(err)
                    }
                    else console.log('3 - SASS output created !')
                    fs.readFile(this.output, 'utf8', (err, data) => {
                        if (err) console.log(err);
            
                        for (let i = 0; i < Data.length; i++) {
                            const x = Data[i];
                            var reg = new RegExp(x.in, 'g');
                            data = data.replace(reg, x.out)
                            
                            
                        }
                        fs.writeFile(this.buildput, data, 'utf8', (err) => {
                            if (err) console.log(err);
                            console.log(`4 - ${path.basename(this.input)} converted to ${path.basename(this.output)}`)
            
                            fs.unlink(this.output, (err) => {
                                    if (err) throw err;
                                    else console.log('deleted')
                                })
            
                        });
                        
                    });
                });
                console.log('2 - SASS done !')
              }
              else console.log(err)
          });
    }
}

module.exports = Go;