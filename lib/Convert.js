const fs = require('fs');
const path = require('path')

class Convert {
    constructor() {
        this.srcDir = `${__dirname}/../src`;
        this.buildDir = `${__dirname}/../build`;
        this.input = `${this.srcDir}/style.me.css`
        this.output = `${this.buildDir}/style.css`
    }
    init() {
        fs.readFile(this.input, 'utf8', (err, data) => {
            if (err) console.log(err);
            var result = data.replace(/bg:|bg +:/g, 'background:');
            fs.writeFile(this.output, result, 'utf8', (err) => {
                if (err) console.log(err);
                console.log(`${path.basename(this.input)} converted to ${path.basename(this.output)}`)
            });
        });
    }
}

module.exports = Convert;