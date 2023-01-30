const baseConfigList = [
  'plugin:wc/recommended',
  'plugin:lit/recommended',
  '@spotify/eslint-config-base',
];

const jsConfigList = [...baseConfigList, 'prettier'];
const tsConfigList = [
  ...baseConfigList,
  '@spotify/eslint-config-typescript',
  'prettier',
];

const jsSettings = {};
const tsSettings = jsSettings;

module.exports = {
  env: {
    browser: true,
  },
  extends: jsConfigList,
  settings: jsSettings,
  overrides: [
    {
      files: ['*.ts'],
      extends: tsConfigList,
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      settings: tsSettings,
    },
    {
      files: ['*.svelte'],
      plugins: ['svelte3'],
      processor: 'svelte3/svelte3',
      extends: tsConfigList,
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      settings: { ...tsSettings, 'svelte3/typescript': true },
    },
  ],
};
