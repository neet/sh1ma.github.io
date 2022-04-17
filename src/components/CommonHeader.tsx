import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.nav`
  width: 100vw;
  position: relative;
  top: 0;
  height: 72px;
  display: flex;
  justify-content: center;
  font-family: 'Roboto', -apple-system;
`

const HeaderItemList = styled.ul`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderItem = styled.div``

const HeaderLogo = styled.div`
  font-size: 1.2em;
`

const HeaderLinks = styled.ul`
  display: flex;
  gap: 1vw;
`

const HeaderLinksItem = styled.li`
  font-size: 1.2em;
`

export const CommonHeader = () => {
  return (
    <Header>
      <HeaderItemList>
        <li>
          <HeaderItem>
            <HeaderLogo>
              <Link href="/">sh1ma.dev</Link>
            </HeaderLogo>
          </HeaderItem>
        </li>
        <li>
          <HeaderLinks>
            <HeaderItem>
              <HeaderLinksItem>
                <Link href="/about">About</Link>
              </HeaderLinksItem>
            </HeaderItem>
          </HeaderLinks>
        </li>
        {/* <HeaderItem>
              <HeaderLinksItem>
                <Link href="/skills">Skills</Link>
              </HeaderLinksItem>
            </HeaderItem>
            <HeaderItem>
              <HeaderLinksItem>
                <Link href="/links">Links</Link>
              </HeaderLinksItem>
            </HeaderItem>
          </HeaderLinks>
        </li> */}
      </HeaderItemList>
    </Header>
  )
}
