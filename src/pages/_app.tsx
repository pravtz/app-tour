import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import GlobalStyled from '@/styles/global'
import defaultTheme from '@/styles/theme/default'
import NextProgress from 'next-progress'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="favicon.svg" />
        {/* font Montserrat - google fonts */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyled />
        <NextProgress color="#6b705c" height={5} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
