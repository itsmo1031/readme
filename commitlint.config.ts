import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['gitmoji'],
  formatter: '@commitlint/format',
  defaultIgnores: true,
  prompt: {
    messages: {},
    questions: {
      type: {
        description: 'please input type:',
      },
    },
  },
};

module.exports = Configuration;
