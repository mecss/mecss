const fs = require('fs');


class Html {
    constructor() {
        this.srcDir = `${__dirname}/../src`;
        this.buildDir = `${__dirname}/../build`;
        this.input = `${srcDir}/index.html`
        this.output = `${buildDir}/index.html`
    }
    init() {
        if (!fs.existsSync(this.buildDir)) fs.mkdirSync(this.buildDir);
        fs.copyFile(this.input, this.output,  (err) => {
            if (err) throw err;
            console.log('html copied');
        });
    }
}

module.exports = Html