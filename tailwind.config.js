/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'monospace'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        bull: '#00ff88',
        bear: '#ff3355',
        gold: '#ffd700',
        dark: '#0a0a0f',
        card: '#111118',
        border: '#1e1e2e',
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        pulse2: 'pulse2 1.5s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00ff88, 0 0 10px #00ff88' },
          '100%': { boxShadow: '0 0 20px #00ff88, 0 0 40px #00ff8844' },
        },
        pulse2: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
}
