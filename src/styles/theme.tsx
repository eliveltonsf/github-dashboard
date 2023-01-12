const defaultColors = {
  primary: '#2ecc71',
  secondary: '#ecf0f1',
  danger: '#f37272',
  light: '#ecf0f1',
  dark: '#233240',
  background: '#191919',
  container: '#2d2d2d',
  text: '#fff',
  link: '#3498db',
};

const assortedColors = {
  white: '#ffffff',
  black: '#000000',
  turquese: '#1abc9c',
  turqueseDark: '#16a085',
  green: '#2ecc71',
  greenDark: '#27ae60',
  blue: '#3498db',
  blueDark: '#2980b9',
  violet: '#9b59b6',
  violetDark: '#8e44ad',
  yellow: '#f1c40f',
  yellowDark: '#f39c12',
  orange: '#e67e22',
  orangeDark: '#d35400',
  red: '#e74c3c',
  redDark: '#c0392b',
  champagne: '#ecf0f1',
  champagneDark: '#bdc3c7',
  metal: '#95a5a6',
  metalDark: '#7f8c8d',
  asphalt: '#34495e',
  asphaltDark: '#2c3e50',
  carbon: '#555459',
  carbonDark: '#3b3a3e',
};

const breakpoints = { xs: '0', sm: '576px', md: '768px', lg: '992px', xl: '1200px', xxl: '1400px' };
const fonts = {
  roboto: `'Roboto', sans-serif`,
  openSans: `'Open Sans', 'Arial', 'Helvetica', 'sans-serif'`,
};
const fontSizes = {
  small: '.8rem',
  normal: '1rem',
  large: '1.2rem',
  title: '1.8rem',
  subtitle: '1.25rem',
};
const space = ['0', '.4rem', '.8rem', '1.2rem', '1.6rem', '2.0rem', '3.2rem', '4.8rem', '6.4rem', '9.6rem'];

interface StyleClosetTheme {
  breakpoints: { [key in keyof typeof breakpoints]: string };
  fonts: { [key in keyof typeof fonts]: string };
  fontSizes: { [key in keyof typeof fontSizes]: string };
  space: string[];
  defaultColors: { [key in keyof typeof defaultColors]: string };
  assortedColors: { [key in keyof typeof assortedColors]: string };
}

const theme: StyleClosetTheme = {
  breakpoints,
  fonts,
  fontSizes,
  space,
  defaultColors,
  assortedColors,
};

export { theme };
export type { StyleClosetTheme };
