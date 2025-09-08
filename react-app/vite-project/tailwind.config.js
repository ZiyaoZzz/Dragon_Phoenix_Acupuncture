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
        },
        'clinic': {
          'green': '#395c3b',      // 诊所主绿色
          'green-light': '#81c784', // 诊所浅绿色
          'green-hover': '#a5d6a7', // 悬停绿色
          'green-dark': '#2e7d32',  // 深绿色
        }
      },
      backgroundColor: {
        'brand-primary': '#395c3b',
        'brand-secondary': '#81c784',
        'brand-light': '#a5d6a7',
      },
      textColor: {
        'brand-primary': '#395c3b',
        'brand-secondary': '#81c784',
        'brand-light': '#a5d6a7',
      }
    },
  },
  plugins: [],
}
