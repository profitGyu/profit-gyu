export const lightTheme = {
  colors: {
    primary: {
      100: '#FFE8EE',
      200: '#FFD1DD',
      300: '#FF9CB3',
      400: '#FF6789',
      500: '#E23465',
      600: '#B82A51',
    },
    secondary: {
      100: '#E5F9FC',
      200: '#B3EEF5',
      300: '#16BDD8',
      400: '#1197AD',
      500: '#0D7182',
      600: '#094B57',
    },
    accent: {
      100: '#FFF9E5',
      200: '#FFF3CC',
      300: '#FFE680',
      400: '#EDD211',
      500: '#BEA80E',
      600: '#8F7F0A',
    },
    background: {
      100: '#FFFFFF',
      200: '#F5F5F5',
      300: '#CDCDCD',
    },
    text: {
      primary: '#262626',
      secondary: '#3A3A3D',
      disabled: '#CDCDCD',
    },
    white: '#FFFFFF',
    error: '#E23465',
    success: '#16BDD8',
    warning: '#EDD211',
  },
};

export const darkTheme = {
  colors: {
    primary: {
      100: '#1A2066',
      200: '#232B8C',
      300: '#2C36B3',
      400: '#3541D9',
      500: '#0A124A',
      600: '#060933',
    },
    secondary: {
      100: '#E5F9FC',
      200: '#B3EEF5',
      300: '#16BDD8',
      400: '#1197AD',
      500: '#0D7182',
      600: '#094B57',
    },
    accent: {
      100: '#FFF9E5',
      200: '#FFF3CC',
      300: '#FFE680',
      400: '#EDD211',
      500: '#BEA80E',
      600: '#8F7F0A',
    },
    background: {
      100: '#262626',
      200: '#3A3A3D',
      300: '#4D4D4D',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CDCDCD',
      disabled: '#3A3A3D',
    },
    error: '#E23465',
    success: '#16BDD8',
    warning: '#EDD211',
  },
};

const Colors = {
  darkTheme,
  lightTheme,
};

export default Colors;

export type ColorsType = typeof darkTheme;
