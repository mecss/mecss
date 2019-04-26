import * as fs from 'fs';
import * as sass from 'node-sass';
require('dotenv').config();

const Data = require('./Data');

class Core {
	watchState: any;
	scssInput: any;
	input: any;
	output: any;
	constructor(watchState :any) {
		this.watchState = watchState;
		this.scssInput = process.env.SCSS_MASTER;
		this.input = process.env.CSS_INPUT;
		this.output = process.env.CSS_OUTPUT;
	}
	handleSassFiles() {
		sass.render({
			file: this.scssInput,
			outFile: this.input,
			outputStyle: 'compressed',
		}, (err, res) => {
			if (err) throw err;
			else fs.writeFile(this.input, res.css, err => {
				if (err) throw (err);
				else this.handleMeFiles();
			});
		});
	}
	handleMeFiles() {
		console.log('👁  | 1 Sass file watched');
		fs.readFile(this.input, 'utf8', (err, data) => {
			if (err) throw err;
			else {
				Data.map((x: { in: RegExp; out: string; }) => {
					const reg = new RegExp(x.in, 'g');
					data = data.replace(reg, x.out);
				});
				fs.writeFile(this.output, data, 'utf8', err => {
					if (err) throw err;
					else this.deleteUselessFiles();
				});
			}
		});
	}
	deleteUselessFiles() {
		if (!this.watchState || this.watchState === 'change') fs.unlink(this.input, err => {
			if (err) throw err;
			else console.log('✅  | mecss file watched');
		});
	}
	start() {
		this.handleSassFiles();
	}
}

module.exports = Core;