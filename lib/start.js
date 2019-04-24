const Html = require('./Html')
const Convert = require('./Convert');
const Go = require('./Go');

class Start {
    static init() {
        const meHtml = new Html();
        meHtml.init()
        
        const meGo = new Go();
        meGo.start()
    }
}

Start.init()