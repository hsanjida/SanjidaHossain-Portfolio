/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#faf8ff',
        ink: '#17131f',
        panel: '#ffffff',
        lav: '#ece7f8',
        lav2: '#ddd6ee',
        line: '#e4ddf1',
        muted: '#5e5870',
        brand: '#6b4fa3',
        brand2: '#4b3478',
        landed: '#1c7a52',
        warn: '#9a5a00',
        danger: '#b3261e',
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(75, 52, 120, 0.18)',
      },
    },
  },
  plugins: [],
};
