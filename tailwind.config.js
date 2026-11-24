/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0c0f',
        panel: '#13151a',
        panel2: '#1a1d23',
        line: '#2b2f38',
        paper: '#f3f1ec',
        muted: '#a1a5ae',
        amber: '#ffb020',
        landed: '#3fd99a',
        flight: '#6ea8ff',
        grey: '#9097a3',
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
