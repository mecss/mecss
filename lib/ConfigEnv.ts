const fs = require(`fs`);

export class ConfigEnv {
    public static init() {
        fs.copyFile(`./.env.example`, `./.env`, (err: any) => {
            if (err) throw err;
            else fs.unlink(`./.env.example`, (err: any) => {
                if (err) throw err;
                else throw `🛠  | mecss environment configured !`;
            });
        });
    }
}

ConfigEnv.init();
