'use client';
import { GlobalStyles } from 'tss-react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TssLogo } from '../ui/TssLogo';
//import { TssLogo } from '../ui/TssLogo_intertwined';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#007acc',
    },
    background: {
      default: '#0d1117',
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: theme.palette.background.default,
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0
          },
        }}
      />
      <TssLogo />
    </ThemeProvider>
  );
}
