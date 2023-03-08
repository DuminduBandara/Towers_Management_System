export const colorPalette = {
  primary: {
    100: '#dcdafa',
    200: '#b9b4f4',
    300: '#968fef',
    400: '#7369e9',
    500: '#5044e4',
    600: '#4036b6',
    700: '#302989',
    800: '#201b5b',
    900: '#100e2e',
  },
  secondary: {
    100: '#f7f7f8',
    200: '#f0f0f1',
    300: '#e8e8e9',
    400: '#e1e1e2',
    500: '#d9d9db',
    600: '#aeaeaf',
    700: '#828283',
    800: '#575758',
    900: '#2b2b2c',
  },
  red: {
    100: '#fccdcd',
    200: '#fa9c9c',
    300: '#f76a6a',
    400: '#f53939',
    500: '#f20707',
    600: '#c20606',
    700: '#910404',
    800: '#610303',
    900: '#300101',
  },
  green: {
    100: '#cdf7d1',
    200: '#9befa3',
    300: '#68e675',
    400: '#36de47',
    500: '#04d619',
    600: '#03ab14',
    700: '#02800f',
    800: '#02560a',
    900: '#012b05',
  },
  lightBlue: {
    100: '#dff4ff',
    200: '#beeafe',
    300: '#9edffe',
    400: '#7dd5fd',
    500: '#5dcafd',
    600: '#4aa2ca',
    700: '#387998',
    800: '#255165',
    900: '#132833',
  },
};

const { createTheme } = require('@mui/material');

const customTheme = createTheme({
  palette: {
    primary: {
      main: colorPalette.primary[500],
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});

export default customTheme;
