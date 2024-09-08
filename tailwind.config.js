// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        accent: '#e3342f',
        // Add more colors here
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'Monaco', 'monospace'],
        // Add more font families here
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        // Add more sizes here
      },
      spacing: {
        // Custom spacing values
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        // Add more spacing values here
      },
      // You can add more design tokens as needed
    },
  },
  plugins: [],
}
