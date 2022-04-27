import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

type Props = {}

class Document extends NextDocument<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps: any = await NextDocument.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const { styles } = this.props

    return (
      <Html>
        <Head>
          <meta property="og:title" content="sh1ma.dev" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://sh1ma.dev" />
          <meta property="og:image" content="https://sh1ma.dev/icon.png" />
          <meta
            property="og:description"
            content="こんな世界、なくなってしまえばいいのよね。"
          />
          <meta name="description" content="sh1ma.dev" />
          <meta
            name="keywords"
            content="sh1ma,Kota Amasaka,天坂光汰,Toka Takatsukasa,鷹司透華,talka"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@altalkalta" />
          <meta name="twitter:title" content="sh1ma.dev" />
          <meta name="twitter:description" content="人類滅亡してほしい" />
          <meta name="twitter:image" content="https://sh1ma.dev/icon.png" />
          {styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
