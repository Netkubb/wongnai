import '../styles/globals.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
  typography:{
    fontFamily:"DB Heavent",
    h2:{
      fontSize:"24px",
      fontFamily:"DB Heavent bold"
    },
    caption:{
      fontSize:"14px"
    }
  }
});

function MyApp({ Component, pageProps }) {
  return (<ThemeProvider theme={theme}>
  <Component {...pageProps} />
</ThemeProvider>)
}

export default MyApp
