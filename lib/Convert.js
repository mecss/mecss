const fs = require('fs');
const path = require('path')
const Sass = require('./Sass')

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
            var result = data.replace(/bg:|bg +:/g, 'background:');
            fs.writeFile(this.output, result, 'utf8', (err) => {
                if (err) console.log(err);
                console.log(`4 - ${path.basename(this.input)} converted to ${path.basename(this.output)}`)
            });
        });
    }
    start() {
        this.sass();
        this.copy()
        // fs.unlink(this.input, (err) => {
        //     if (err) throw err;
        //     else console.log('deleted')
        // })
    }
}

module.exports = Convert;