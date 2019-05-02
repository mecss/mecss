const Data = require(`../data/Data`);
const fs = require(`fs`);
let titleTmp = ``;
for (const key in Data) {
    if (Data.hasOwnProperty(key)) {
        const gr = Data[key];
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

export {};
