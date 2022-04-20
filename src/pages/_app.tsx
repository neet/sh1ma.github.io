import type { AppProps } from 'next/app'
import { CommonHeader } from 'components/CommonHeader'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import DefaultTheme from 'themes/default'
import 'styles/fonts.scss'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    overflow: hidden;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', 'Noto Sans JP', -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;

    background-color: #7f93c4;
    color: #f4f2ff;

  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    border: 0;
    list-style: none;
  }
`

const App = styled.div`
  box-sizing: border-box;
  color: ${(props) => props.theme.fg};
  background-color: ${(props) => props.theme.bg};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <App>
        <CommonHeader />
        <Component {...pageProps} />
      </App>
    </ThemeProvider>
  )
}

export default Portfolio
