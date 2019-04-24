const fs = require('fs');


class Html {
    constructor() {
        this.input = `./src/index.html`
        this.output = `./build/index.html`
    }
    init() {
        fs.copyFile(this.input, this.output, err => {
            if (err) throw err;
            else console.log('✅  | HTML assets copied.');
        });
    }
}

module.exports = Html