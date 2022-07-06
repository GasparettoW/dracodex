export const size = {
  container: '400px',
}

const device = {
  mobile: {
    sm: '320px',
    md: '480px',
    lg: '640px',
  },
  tablet: '768px',
  desktop: {
    sm: '1024px',
    md: '1440px',
    lg: '2560px',
  },
}

export const breakpoint = {
  xs: `(min-width: ${device.mobile.sm})`,
  sm: `(min-width: ${device.mobile.md})`,
  md: `(min-width: ${device.tablet})`,
  lg: `(min-width: ${device.desktop.sm})`,
  xl: `(min-width: ${device.desktop.md})`,
}

export const color = {
  black: '#1e293b',
  white: '#fff',
  blue: {
    '050': '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  gray: {
    '050': '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  green: {
    '050': '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  red: {
    '050': '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
  },
  orange: {
    '050': '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
}

export const space = {
  xxs: '2px',
  xs: '4px',
  sm: '8px',
  md: '13px',
  lg: '28px',
  xl: '32px',
  xxl: '40px',
  section: '64px',
  container: '80px',
}

export const font = {
  family: {
    default: "'Nunito', sans-serif",
    brand: "'Press Start 2P', cursive;",
  },
  size: {
    xs: '12px',
    sm: '13px',
    md: '14px',
    lg: '16px',
    xl: '18px',
    brand: '20px',
    title: '24px',
  },
  weight: {
    ligth: 300,
    regular: 500,
    bold: 700,
  },
  letterSpacing: {
    sm: '0.5px',
  },
}

export const border = {
  radius: {
    sm: '6px',
    md: '16px',
    lg: '30px',
  },
}

export const transition = {
  fast: '0.2s ease-in-out',
  normal: '0.4s ease-in-out',
  slow: '0.6s ease-in-out',
}
