module.exports = {
    rules: {
      'type-empty': [2, 'never'],
      'type-enum': [2, 'always',
        [
          'WIP',
          'feat',
          'fix',
          'refactor',
          'docs',
          'test',
          'chore',
          'build',
          'style',
          'revert'
        ],
      ],
    }
  };
  