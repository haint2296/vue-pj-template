export default {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  plugins: ['prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.css',
      options: {
        singleQuote: false,
      },
    },
  ],
};
