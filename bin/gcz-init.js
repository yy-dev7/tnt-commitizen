const path = require('path');
const fs = require('fs');

if (!fs.existsSync('.git')) {
  console.log('不是一个 git 仓库!')
  return
}

const commitlintrcSrc = path.join(__dirname, '../commitlint.config.js')
const commitlintrcDest = 'commitlint.config.js'

fs.copyFileSync(commitlintrcSrc, commitlintrcDest)

const hookSrc = path.join(__dirname, '../installation/commit-msg-hook')
const hookDest = '.git/hooks/commit-msg'
fs.copyFileSync(hookSrc, hookDest)

console.log('Successfully created commit-msg hook.')