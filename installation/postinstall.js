const fs = require("fs")
const path = require("path")
const homedir = require('os').homedir()

const pathToFile = path.join(__dirname, '../.cz-config.js')
const pathToNewDestination = path.join(homedir, '.cz-config.js')
 
fs.copyFile(pathToFile, pathToNewDestination, function(err) {
  if (err) {
    throw err
  } else {
    console.log("Successfully copied the .cz-config.js!")
  }
})