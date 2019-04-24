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
           this.sass()

            for (let i = 0; i < Data.length; i++) {
                const x = Data[i];
                var reg = new RegExp(x.in, 'g');
                data = data.replace(reg, x.out)
                
                
            }
            fs.writeFile(this.output, data, 'utf8', (err) => {
                if (err) console.log(err);
                console.log(`4 - ${path.basename(this.input)} converted to ${path.basename(this.output)}`)

                fs.unlink(this.input, (err) => {
                        if (err) throw err;
                        else console.log('deleted')
                    })

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


    // var promise = () => this.sass()
    // var promise2 = promise.then(function (data) {
    //     return this.copy() // if readFile was successful, let's readAnotherFile
    // }, function (err) {
    //     console.error(err) // if readFile was unsuccessful, let's log it but still readAnotherFile
    // return readAnotherFile()
    // })
    // var promise3 = promise2.then(function (data) {
    //     return fs.unlink(this.input, (err) => {
    //             if (err) throw err;
    //             else console.log('deleted')
    //         })
    // }, function (err) {
    //     console.error(err) 
    // })
    // promise2.then(console.log, console.error) // the result of readAnotherFile
    }
}

module.exports = Convert;