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
          <meta
            property="og:image"
            content="https://sh1ma.dev/anon-icon2.png"
          />
          <meta
            property="og:description"
            content="こんな世界、なくなってしまえばいいのよね。"
          />
          <title>sh1ma.dev</title>
          <meta name="description" content="破壊された日常" />
          <meta
            name="keywords"
            content="sh1ma,Kota Amasaka,天坂光汰,Toka Takatsukasa,鷹司透華,talka"
          />
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
