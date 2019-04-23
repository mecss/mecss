const fs = require('fs');


class Html {
    constructor() {
        this.srcDir = `${__dirname}/../src`;
        this.buildDir = `${__dirname}/../build`;
        this.input = `${this.srcDir}/index.html`
        this.output = `${this.buildDir}/index.html`
    }
    init() {
        if (!fs.existsSync(this.buildDir)) fs.mkdirSync(this.buildDir);
        fs.copyFile(this.input, this.output,  (err) => {
            if (err) throw err;
            console.log('1 - html copied');
        });
    }
}

module.exports = Html