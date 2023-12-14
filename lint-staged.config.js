module.exports = {
  '**/*.{ts,tsx}': [() => 'tsc -p tsconfig.json --noEmit'],
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '**/*.{css,scss}': ['stylelint --fix', 'prettier --write'],
};
