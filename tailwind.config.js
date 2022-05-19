module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-mode-elements": "hsl(209, 23%, 22%)",
        "dark-mode-background": "hsl(207, 26%, 17%)",
        "light-mode-text": "hsl(200, 15%, 8%)",
        "light-mode-input": "hsl(0, 0%, 52%)",
        "light-mode-background": "hsl(0, 0%, 98%)",
        "dark-mode-text": "hsl(0, 0%, 100%)"
      },
      fontSize: {
          "14": "clamp(14px, 1.2vw, 16px)",
          "16": "clamp(16px, 1.2vw, 18px)"
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
