const path = require('path')

process.on('uncaughtException', function (err) {
  console.error(err.message || err)
  process.exit(1)
})

require('commitizen/dist/cli/git-cz.js').bootstrap({
  cliPath: path.join(__dirname, '../'),
  config: {
    "path": path.join(__dirname, '../node_modules/cz-customizable'),
  },
})