import type { AppProps } from 'next/app'
import { CommonHeader } from 'components/CommonHeader'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import DefaultTheme from 'themes/default'
import 'styles/fonts.scss'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    overflow: hidden;
    padding: 0;
    margin: 0;
    /* overflow: hidden; */
    font-family: 'Roboto', 'Noto Sans JP', -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
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
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: ${(props) => props.theme.fg};
  background-color: ${(props) => props.theme.bg};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`

function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <App>
        <CommonHeader />
        <Component {...pageProps} />
      </App>
    </ThemeProvider>
  )
}

export default Portfolio
