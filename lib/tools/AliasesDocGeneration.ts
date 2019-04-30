const Data2 = require(`../data/Data`);
const fs2 = require(`fs`);
let titleTmp = ``;
for (const key in Data2) {
    if (Data2.hasOwnProperty(key)) {
        const gr = Data2[key];
        let tmp = ``;
        titleTmp += `\n## ${key} (${gr.length} properties)\n`;
        gr.map((x: { alias: string; out: string; }) => {
            tmp += `|${x.out.replace(`:`, ``)}|${x.alias}|\n`;
        });
        titleTmp += `\n| PROPERTY | ALIAS |\n| -------- | ----- |\n${tmp}`;
    }
}

fs2.writeFile(`./docs/Aliases.md`, titleTmp, (err: any) => {
    if (err) throw err;
});
