import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { shadows } from "./shadows";

export const inter = Inter({
    weight: ['100','200','300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ED3237',
    },
    secondary: {
      main: '#422F2C',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    body1: {
      fontSize: '15px'
    },
    body2: {
      fontSize: '14px'
    },
    h1: {
      fontSize: '30px',
      fontWeight: 700
    },
    h2: {
      fontSize: '24px',
      fontWeight: 700
    },
    h3: {
      fontSize: '20px'
    }
  },
  shadows
});

export default theme;
