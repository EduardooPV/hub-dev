import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from "../styles/GlobalStyled"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HubLocal | Lançamento aplicativo</title>
      </Head>

      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
