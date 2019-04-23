
const fs = require('fs')
var sass = require('node-sass');

class Sass {
    constructor() {
        this.input = `./src/styles/master.me.scss`
        this.output = `./build/style.me.css`
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
                });
                console.log('2 - SASS done !')
              }
              else console.log(err)
          });

    }
}

module.exports = Sass