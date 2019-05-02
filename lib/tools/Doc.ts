const fs = require(`fs`);
const path = require(`path`);
require(`dotenv`).config();

class Doc {
    public static generateAliases() {
        const json = JSON.parse(fs.readFileSync(path.resolve(process.env.DATA_OUTPUT)));
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

Doc.generateAliases();

module.exports = Doc;

export{};
