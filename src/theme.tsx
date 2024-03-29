import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export default function ThemeManager(props: any) {
  const { app } = useSelector((state: any) => state);
  // A custom theme for this app
  const isDarkTheme = app.is_dark_theme;
  const mainPrimaryColor: any = isDarkTheme ? '#2A98EC' : '#5464F5';
  const mainSecondaryColor: any = isDarkTheme ? '#3F3B6C' : '#898AA6';

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',

      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },

      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
    shape: {
      borderRadius: 10,
    },
    typography:{
      fontFamily: 'Outfit'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {props.children}
    </ThemeProvider>
  );
}
