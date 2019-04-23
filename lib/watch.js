var fs = require('fs');
var buildFolder = `${__dirname}/../build`;

var html = `${__dirname}/../src/index.html`;
var newHtml = `${__dirname}/../build/index.html`;

if (!fs.existsSync(buildFolder)){
    fs.mkdirSync(buildFolder);
}

var fs = require('fs');
const file = `${__dirname}/../src/style.css`
const newFile = `${__dirname}/../build/style.css`
const convert = () => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) console.log(err);
        var result = data.replace(/bg:|bg +:/g, 'background:');
        fs.writeFile(newFile, result, 'utf8', (err) => {
            if (err) console.log(err);
        });
    });
    // destination.txt will be created or overwritten by default.
fs.copyFile(html, newHtml,  (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  });
}

fs.watchFile(file, () => convert())
