const fs = require(`fs`);

class ConfigEnv {
    public static init() {
        fs.copyFile(`./.env.example`, `./.env`, (err: boolean) => {
            if (err) throw err;
            else fs.unlink(`./.env.example`, (err: boolean) => {
                if (err) throw err;
                else throw `🛠  | mecss environment configured !`;
            });
        });
    }
}

ConfigEnv.init();
