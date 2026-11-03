import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          warm: '#FAF8F5',   // Warm alabaster / cream matching screenshot
          subtle: '#F2EFE9', // Border and subtle card backgrounds
          muted: '#E6E1D7',
          dark: '#11161B',   // Executive Charcoal
          charcoal: '#1A2027',
          deep: '#0B251E'    // Deep Jomoro Emerald
        },
        accent: {
          purple: {
            DEFAULT: '#7C3AED', // Imperial Violet / Vibrant Purple
            light: '#9333EA',
            dark: '#6D28D9',
            deep: '#4C1D95',
            muted: '#EDE9FE',
            glow: 'rgba(124, 58, 237, 0.18)'
          },
          gold: {
            DEFAULT: '#D4AF37',
            light: '#E6C86E',
            dark: '#AA8820'
          }
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        widest: '0.15em',
        ultra: '0.25em'
      }
    }
  },
  plugins: []
}
