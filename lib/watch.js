const fs = require('fs')

const Html = require('./Html')
const Convert = require('./Convert');

class Watch {
    static init() {
        const meHtml = new Html();
        meHtml.init()
        
        const meConvert = new Convert();
        meConvert.init()

        fs.watchFile(meConvert.input, () => meConvert.init())
    }
}

Watch.init()