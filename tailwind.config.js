/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 配置哪些文件中需要写tailwindcss代码
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
