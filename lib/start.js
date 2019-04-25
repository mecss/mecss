const fs = require('fs')
require('dotenv').config()


const Core = require('./Core')

class Start {
    static init() {
        if (!fs.existsSync(process.env.PUBLIC)) fs.mkdirSync(process.env.PUBLIC);
        const newCore = new Core();
        newCore.start()
    }
}

Start.init()