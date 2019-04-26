import * as fs from 'fs';
require('dotenv').config();

const Core = require('./Core');

class Start {
	public: any;
	constructor() {
		this.public = process.env.PUBLIC;
	}
	start() {
		if (!fs.existsSync(this.public)) fs.mkdirSync(this.public);
		const newCore = new Core();
		newCore.start();
	}
}

const meStart = new Start()
meStart.start();