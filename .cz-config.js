'use strict';

module.exports = {
  types: [
    {
      value: 'WIP',
      name: '🖌  WIP:      还在进行中'
    },
    {
      value: 'feat',
      name: '🍺 feat:     完成新功能'
    },
    {
      value: 'fix',
      name: '🐞 fix:      修复了bug'
    },
    {
      value: 'build',
      name: '🛠  build:    改动了构建系统或者外部依赖 (例如: composer, webpack, go mod)'
    },
    {
      value: 'chore',
      name: '☀️  chore:    除 src 或 test之外的其他改动'
    },
    {
      value: 'refactor',
      name: '🪓 refactor: 重构了部分代码'
    },
    {
      value: 'docs',
      name: '📚 docs:     仅仅改动了文档'
    },
    {
      value: 'test',
      name: '⚖️  test:     改动了测试用例'
    },
    {
      value: 'style',
      name: '💅 style:    代码风格的改变 (空格/格式化/增加分号 等等)'
    },
    {
      value: 'revert',
      name: '⏪ revert:   撤销了某次提交'
    }
  ],

  scopes: [],

  allowCustomScopes: true,

  skipQuestions: ['footer'],

  allowBreakingChanges: ["feat", "fix"],

  subjectLimit: 100,
};
