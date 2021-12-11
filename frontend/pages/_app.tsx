import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { config } from '../ions/appData'
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme } from '../ions/theme'
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>;
    </>
  )
}

export default MyApp
