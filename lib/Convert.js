const fs = require('fs');
const path = require('path')
const Sass = require('./Sass')
const Data = require('./Data')

class Convert {
    constructor() {
        this.input = `./build/style.me.css`
        this.output = `./build/style.css`
    }
    sass() {
        const meSass = new Sass();
        meSass.start();
    }
    copy() {
        fs.readFile(this.input, 'utf8', (err, data) => {
            if (err) console.log(err);
           

            for (let i = 0; i < Data.length; i++) {
                const x = Data[i];
                var reg = new RegExp(x.in, 'g');
                data = data.replace(reg, x.out)
                
                
            }
            fs.writeFile(this.output, data, 'utf8', (err) => {
                if (err) console.log(err);
                console.log(`4 - ${path.basename(this.input)} converted to ${path.basename(this.output)}`)
            });
            
        });
    }
    start() {
        // this.sass();
        this.copy();
        // fs.unlink(this.input, (err) => {
        //     if (err) throw err;
        //     else console.log('deleted')
        // })
    }
}

module.exports = Convert;