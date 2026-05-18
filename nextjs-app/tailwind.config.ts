import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pure Performant Labs Design System
        navy: {
          DEFAULT: '#0E1B2C',
          dark: '#0A1018',
          soft: '#1E2F47',
          2: '#16263B',
        },
        ink: '#0A1018',
        bg: {
          DEFAULT: '#F4F6F8',
          surface: '#FFFFFF',
          alt: '#FAFBFC',
        },
        border: {
          DEFAULT: '#E3E7EB',
          strong: '#C9D1D9',
          dark: '#1F2D40',
        },
        text: {
          DEFAULT: '#0E1B2C',
          2: '#4A5667',
          3: '#7B8696',
          'on-dark': '#E8EDF3',
          'on-dark-2': '#9AA8BC',
        },
        accent: {
          DEFAULT: 'oklch(58% 0.06 245)',
          hover: 'oklch(52% 0.07 245)',
          soft: 'oklch(96% 0.015 245)',
        },
        coa: {
          DEFAULT: '#2E6F4E',
          bg: '#E6F1EB',
          border: '#BFD8C9',
        },
        warn: {
          DEFAULT: '#8A5A14',
          bg: '#F6EFE0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        lg: '10px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(14,27,44,.04)',
        DEFAULT: '0 4px 16px rgba(14,27,44,.06), 0 1px 2px rgba(14,27,44,.04)',
        lg: '0 12px 32px rgba(14,27,44,.10), 0 2px 6px rgba(14,27,44,.05)',
      },
    },
  },
  plugins: [],
};

export default config;
