import * as fs from 'fs';
const bs = require('browser-sync').create();

const Core = require('./Core');

class Watch {
	scssInput: any;
	publicPath: any;
	constructor() {
		this.scssInput = process.env.SCSS_MASTER;
		this.publicPath = process.env.PUBLIC;
	}
	start() {
		if (!fs.existsSync(this.publicPath)) fs.mkdirSync(this.publicPath);
		bs.init({
			baseDir: process.env.SRC,
			server: this.publicPath,
		});
		bs.watch(process.env.SCSS_FILES, (watchState :string) => {
			const newCore = new Core(watchState);
			newCore.start();
			bs.reload();
		});
		this.triggerFirstWatch();
	}
	triggerFirstWatch() {
		fs.appendFile(this.scssInput, '//w', 'utf8', err => {
			if (err) throw err;
			else fs.readFile(this.scssInput, 'utf8', (err, data) => {
				if (err) throw err;
				const result = data.replace(/\/\/w/g, '');
				fs.writeFile(this.scssInput, result, 'utf8', err => {
					if (err) throw err;
				});
			});
		});
	}
}

const meWatch = new Watch();
meWatch.start();