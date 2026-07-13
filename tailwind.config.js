/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dragon Phoenix Acupuncture Brand Colors
        'brand': {
          'primary': '#395c3b',    // 深绿色 - 主要品牌色
          'secondary': '#81c784',  // 浅绿色 - 次要品牌色
          'light': '#a5d6a7',     // 更浅的绿色 - 悬停效果
          'accent': '#2e7d32',    // 强调绿色
          'surface': '#f1f9f0',   // 浅绿背景 - 各板块统一底色
        },
        'clinic': {
          'green': '#395c3b',      // 诊所主绿色
          'green-light': '#81c784', // 诊所浅绿色
          'green-hover': '#a5d6a7', // 悬停绿色
          'green-dark': '#2e7d32',  // 深绿色
        }
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 10px 20px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
