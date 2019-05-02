const chalk = require(`chalk`);
const fs = require(`fs`);
require(`dotenv`).config();

const Core = require(`./Core`);

class Start {
    private publicDir: string | undefined;
    constructor() {
        this.publicDir = process.env.PUBLIC;
    }
    public start() {
        if (!fs.existsSync(this.publicDir)) fs.mkdirSync(this.publicDir);
            const newCore = new Core(``, `no file`);
            newCore.start();
            console.log(chalk.hex(`#5f77cc`).bold(`[start]`) + chalk.hex(`#5fcc9e`).bold(` All files`) + ` compiled`);
    }
}

const meStart = new Start();
meStart.start();
export{};
