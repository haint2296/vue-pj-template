export default {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  // Đảm bảo mỗi thuộc tính nằm trên một dòng (Vue/HTML/JSX)
  singleAttributePerLine: true,
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
