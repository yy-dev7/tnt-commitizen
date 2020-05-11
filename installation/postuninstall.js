const fs = require("fs")
const path = require("path")
const homedir = require('os').homedir()

fs.unlinkSync(path.join(homedir, '.cz-config.js'))