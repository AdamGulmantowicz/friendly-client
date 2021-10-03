
const theme = {
  primary: {
    'DEFAULT': '#4e73df',
    'dark': '#224abe'
  },
  gray: {
    '100': '#f8f9fc',
    '200': '#eaecf4',
    '300': '#dddfeb',
    '400': '#d1d3e2',
    '500': '#b7b9cc',
    '600': '#858796',
    '700': '#6e707e',
    '800': '#5a5c69',
    '900': '#3a3b45',
  },
  secondary: {
    'DEFAULT': '#858796',
    'dark': '#60616f'
  },
  light: {
    'DEFAULT': '#f8f9fc',
    'dark': '#c2cbe5',
  },
  dark: {
    'DEFAULT': '#5a5c69',
    'dark': '#373840'
  },
  info: {
    'DEFAULT': '#36b9cc',
    'dark': '#258391'
  },
  success: {
    'DEFAULT': '#1cc88a',
    'dark': '#13855c'
  },
  warning: {
    'DEFAULT': '#f6c23e',
    'dark': '#dda20a'
  },
  danger: {
    'DEFAULT': '#e74a3b',
    'dark': '#be2617'
  }
};

const config = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: theme.primary,
        gray: theme.gray,
        secondary: theme.secondary,
        light: theme.light,
        dark: theme.dark,
        info: theme.info,
        success: theme.success,
        warning: theme.warning,
        danger: theme.danger,
        text: theme.gray
      },
      boxShadow: {
        '100': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        '200': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        '300': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        '400': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        '500': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        '600': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
        'light-blue': '0 0 0 0.2rem rgb(78 115 223 / 25%)'
      },
      fontFamily: {
        sans: ['"Nunito"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = config;
