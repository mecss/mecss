const fs = require(`fs`);
require(`dotenv`).config();

import Core from './Core';

class Start {
    public public: any;
    constructor() {
        this.public = process.env.PUBLIC;
    }
    public start() {
        if (!fs.existsSync(this.public)) fs.mkdirSync(this.public);
        const newCore = new Core(``);
        newCore.start();
    }
}

const meStart = new Start();
meStart.start();
