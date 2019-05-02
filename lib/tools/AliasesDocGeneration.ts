const fs = require(`fs`);
const path = require(`path`);
const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, `data/data.json`)));

class AliasesDocGeneration {
    public static init() {
        let titleTmp = ``;
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                const gr = json[key];
                let tmp = ``;
                titleTmp += `\n## ${key} (${gr.length} properties)\n`;
                gr.map((x: { alias: string; out: string; }) => {
                    tmp += `|${x.out.replace(`:`, ``)}|${x.alias}|\n`;
                });
                titleTmp += `\n| PROPERTY | ALIAS |\n| -------- | ----- |\n${tmp}`;
            }
        }
        fs.writeFile(`./docs/Aliases.md`, titleTmp, (err: any) => {
            if (err) throw err;
        });
    }
}

AliasesDocGeneration.init();

export {};
