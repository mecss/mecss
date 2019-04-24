const fs = require('fs')

const Html = require('./Html')
const Core = require('./Core')

class Start {
    static init() {
        if (!fs.existsSync(`./build`)) fs.mkdirSync(`./build`);
        const meHtml = new Html();
        meHtml.init()
        const newCore = new Core();
        newCore.handleSassInput()
    }
}

Start.init()