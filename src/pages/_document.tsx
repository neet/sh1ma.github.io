import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
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
