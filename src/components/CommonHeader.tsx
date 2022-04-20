import Link from 'next/link'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, SetStateAction, useState } from 'react'

type PropsWithClassName = {
  className?: string
}

const Header = styled.nav`
  width: 100vw;
  position: fixed;
  top: 0;
  height: 72px;
  display: flex;
  justify-content: center;
  font-family: 'Roboto', -apple-system;
  z-index: 999;
  background-color: #7f93c4; ;
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

  ${media.lessThan('small')`
    display: none;
  `}
`

const HeaderLinksItem = styled.li`
  font-size: 1.2em;
`

const LinksMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* width: 100vw; */
  z-index: 9999;
  /* overflow: hidden; */
  background-color: #f4f0fd;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const LinksMenuHeader = styled.nav`
  height: 72px;
  width: 100%;
  top: 0;
  position: absolute;
`

const LinksMenuMain = styled.ul`
  height: 30%;
  width: 100%;
  top: 0;
  position: absolute;
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #000;
`

const LinksMenuCloseButton = styled(FontAwesomeIcon)`
  color: #000;
  position: absolute;
  top: 24px;
  right: 24px;
`

type LinksMenuProps = {
  setIsOpened: Dispatch<SetStateAction<boolean>>
}

const LinksMenu = (props: LinksMenuProps) => {
  const close = () => {
    props.setIsOpened(false)
  }

  return (
    <LinksMenuContainer>
      <LinksMenuHeader>
        <div onClick={close}>
          <LinksMenuCloseButton icon={faXmark} size="lg" />
        </div>
      </LinksMenuHeader>
      <LinksMenuMain>
        <li>
          <HeaderLinksItem>
            <Link href="/" passHref>
              <div onClick={close}>Home</div>
            </Link>
          </HeaderLinksItem>
        </li>
        <li>
          <HeaderLinksItem>
            <a href="https://twitter.com/altalkalta">
              <div onClick={close}>Twitter</div>
            </a>
          </HeaderLinksItem>
        </li>
        <li>
          <HeaderLinksItem>
            <a href="/https://scrapbox.io/talka-memo/">
              <div onClick={close}>Scrapbox</div>
            </a>
          </HeaderLinksItem>
        </li>
      </LinksMenuMain>
    </LinksMenuContainer>
  )
}

type LinksMenuButtonProps = {
  className?: string
}

const LinksMenuButton = (props: LinksMenuButtonProps) => {
  const [isOpened, setIsOpened] = useState(false)

  if (isOpened) {
    return <LinksMenu setIsOpened={setIsOpened}></LinksMenu>
  }

  return (
    <div className={props.className} onClick={() => setIsOpened(true)}>
      <FontAwesomeIcon icon={faBars} size="lg" />
    </div>
  )
}

const LinksMenuButtonStyled = styled(LinksMenuButton)`
  ${media.greaterThan('small')`
    display: none;
  `}
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
                <a href="https://twitter.com/altalkalta">Twitter</a>
              </HeaderLinksItem>
            </HeaderItem>
            <HeaderItem>
              <HeaderLinksItem>
                <a href="https://scrapbox.io/talka-memo/">Scrapbox</a>
              </HeaderLinksItem>
            </HeaderItem>
          </HeaderLinks>
          <LinksMenuButtonStyled />
        </li>
      </HeaderItemList>
    </Header>
  )
}
