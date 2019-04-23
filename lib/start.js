const Html = require('./Html')
const Convert = require('./Convert');

class Start {
    static init() {
        const meHtml = new Html();
        meHtml.init()
        
        const meConvert = new Convert();
        meConvert.start()
    }
}

Start.init()