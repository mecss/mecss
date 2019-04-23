const fs = require('fs');
const path = require('path')

var srcDir = `${__dirname}/../src`;
var buildDir = `${__dirname}/../build`;

const input = `${__dirname}/../src/style.me.css`
const output = `${__dirname}/../build/style.css`

const htmlIn = `${srcDir}/index.html`
const htmlOut = `${buildDir}/index.html`

if (!fs.existsSync(buildDir)) fs.mkdirSync(buildDir);
fs.copyFile(htmlIn, htmlOut,  (err) => {
    if (err) throw err;
    console.log('html copied');
});

const convert = () => {
    fs.readFile(input, 'utf8', (err, data) => {
        if (err) console.log(err);
        var result = data.replace(/bg:|bg +:/g, 'background:');
        fs.writeFile(output, result, 'utf8', (err) => {
            if (err) console.log(err);
            console.log(`${path.basename(input)} converted to ${path.basename(output)}`)
        });
    });
}

convert();