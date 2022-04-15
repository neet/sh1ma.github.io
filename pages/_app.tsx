import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import { CommonHeader } from 'components/CommonHeader/CommonHeader'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <CommonHeader />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
