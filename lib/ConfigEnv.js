const fs = require('fs');

class ConfigEnv {
    static init() {
        fs.copyFile('./.env.example', './.env', (err) => {
            if (err) throw err;
            else fs.unlink('./.env.example', (err) => {
                if (err) throw err;
                console.log('🛠  | mecss environment configured !');
              });
          });
    }
}

ConfigEnv.init()