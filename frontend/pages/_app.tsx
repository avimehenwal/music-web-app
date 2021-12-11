import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { config } from '../ions/appData'
import '@fontsource/roboto/700.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
