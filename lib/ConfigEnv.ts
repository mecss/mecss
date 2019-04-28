const chalk = require(`chalk`);
const fs = require(`fs`);

class ConfigEnv {
    public static init() {
        fs.copyFile(`./.env.example`, `./.env`, (err: boolean) => {
            if (err) throw err;
            else fs.unlink(`./.env.example`, (err: boolean) => {
                if (err) throw err;
                else console.log(chalk.hex(`#8769ce`).bold(`[config]`) + chalk.hex(`#5fcc9e`).bold(` mecss`) +  ` environement configured.`);
            });
        });
    }
}

ConfigEnv.init();
