const fs = require('fs')

const Core = require('./Core')

class Start {
    static init() {
        if (!fs.existsSync(`./public`)) fs.mkdirSync(`./public`);
        const newCore = new Core();
        newCore.handleSassInput()
    }
}

Start.init()