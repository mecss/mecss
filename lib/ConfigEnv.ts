import * as fs from 'fs';

export class ConfigEnv {
    public static init() {
        fs.copyFile(`./.env.example`, `./.env`, err => {
            if (err) throw err;
            else fs.unlink(`./.env.example`, err2 => {
                if (err2) throw err;
                else throw `🛠  | mecss environment configured !`;
            });
        });
    }
}

ConfigEnv.init();
