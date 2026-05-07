import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        silver: {
          'primary': '#a0a0a0',
          'primary-content': '#0a0a0a',
          'secondary': '#c0c0c0',
          'secondary-content': '#0a0a0a',
          'accent': '#8b8b8b',
          'accent-content': '#ffffff',
          'neutral': '#1a1a2e',
          'neutral-content': '#d4d4d4',
          'base-100': '#0f0f17',
          'base-200': '#16161f',
          'base-300': '#1e1e2a',
          'base-content': '#c8c8d0',
          'info': '#7dd3fc',
          'success': '#86efac',
          'warning': '#fcd34d',
          'error': '#fca5a5',
        },
      },
    ],
  },
};
