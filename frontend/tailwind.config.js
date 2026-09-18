export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        // ── Page / surface ───────────────────────────────────────────────
        // canvas  = outermost page background
        // surface = card / panel background
        // raised  = elevated surface (modals, dropdowns, tooltips)
        canvas: '#0B1020',
        surface: '#151D2E',
        raised: '#1C2638',

        // ── Text ─────────────────────────────────────────────────────────
        ink: {
          DEFAULT: '#F8FAFC',   // primary text
          muted: '#94A3B8',   // secondary / descriptive text
          subtle: '#64748B',   // de-emphasised / placeholder text
        },

        // ── Borders ──────────────────────────────────────────────────────
        line: {
          DEFAULT: '#263449',   // default border
          strong: '#334D6B',   // stronger border
        },

        // ── Primary brand — violet ────────────────────────────────────────
        brand: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',   // primary
          600: '#7C3AED',   // hover
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },

        // ── Realtime / live — cyan ────────────────────────────────────────
        live: {
          50: 'rgba(34,211,238,0.08)',
          100: 'rgba(34,211,238,0.15)',
          500: '#22D3EE',   // realtime primary
          600: '#06B6D4',
          700: '#0891B2',
        },

        // ── Semantic: warning ─────────────────────────────────────────────
        warn: {
          50: 'rgba(251,191,36,0.10)',
          100: 'rgba(251,191,36,0.18)',
          500: '#FBBF24',
          600: '#F59E0B',
        },

        // ── Semantic: danger / error ──────────────────────────────────────
        danger: {
          50: 'rgba(251,113,133,0.10)',
          100: 'rgba(251,113,133,0.18)',
          500: '#FB7185',
          600: '#F43F5E',
        },

        // ── Semantic: success ─────────────────────────────────────────────
        success: {
          50: 'rgba(52,211,153,0.10)',
          100: 'rgba(52,211,153,0.18)',
          500: '#34D399',
          600: '#10B981',
          700: '#059669',
        },
      },

      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.30)',
        lift: '0 4px 6px -2px rgba(0,0,0,0.30), 0 12px 24px -8px rgba(0,0,0,0.45)',
        modal: '0 24px 48px -12px rgba(0,0,0,0.65)',
      },

      transitionTimingFunction: {
        swift: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },

      keyframes: {
        'live-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '70%': { transform: 'scale(2.4)', opacity: '0' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        // flash-row: violet-tinted row highlight on vote arrival
        'flash-row': {
          '0%': { backgroundColor: 'rgba(139,92,246,0.12)' },
          '100%': { backgroundColor: 'rgba(139,92,246,0)' },
        },
        'count-bump': {
          '0%': { transform: 'translateY(4px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'delta-rise': {
          '0%': { transform: 'translateY(6px)', opacity: '0' },
          '18%': { transform: 'translateY(0)', opacity: '1' },
          '75%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-8px)', opacity: '0' },
        },
        'skeleton-sweep': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },

      animation: {
        'live-ring': 'live-ring 1.9s cubic-bezier(0.23,1,0.32,1) infinite',
        'flash-row': 'flash-row 900ms cubic-bezier(0.23,1,0.32,1) forwards',
        'count-bump': 'count-bump 220ms cubic-bezier(0.23,1,0.32,1)',
        'delta-rise': 'delta-rise 1800ms cubic-bezier(0.23,1,0.32,1) forwards',
        'skeleton-sweep': 'skeleton-sweep 1.6s linear infinite',
      },
    },
  },
  plugins: [],
};
