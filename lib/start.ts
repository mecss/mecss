const fs = require(`fs`);
require(`dotenv`).config();

import Core from './Core';

class Start {
    private publicDir: string | undefined;
    constructor() {
        this.publicDir = process.env.PUBLIC;
    }
    public start() {
        if (!fs.existsSync(this.publicDir)) fs.mkdirSync(this.publicDir);
        const newCore = new Core(`no watch state`);
        newCore.start();
    }
}

const meStart = new Start();
meStart.start();
