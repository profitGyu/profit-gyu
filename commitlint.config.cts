import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  formatter: '@commitlint/format',
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'body-min-length': [2, 'always', 10],
    'body-max-length': [2, 'always', 100],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'build',
        'chore',
        'ci',
        'docs',
        'style',
        'refactor',
        'test',
        'hotfix',
        'api',
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [0, 'always', 'start-case'],
  },
  ignores: [(commit) => commit === ''],
  defaultIgnores: true,
  // helpUrl: '미정',
};

export default Configuration;
