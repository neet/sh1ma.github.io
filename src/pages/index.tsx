import type { NextPage } from 'next'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faLink } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Container = styled.main`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2f3136;
`

const ContentList = styled.div`
  font-family: 'Noto Sans JP', Roboto;
  display: flex;
  justify-content: center;
  height: 40%;
  width: 100%;
  background-color: #7f93c4;
  border-radius: 8px;
  max-height: 250px;
  max-width: 380px;
`

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
`

const IconWrapper = styled.div`
  position: relative;
  height: 10%;
  width: 100%;
  margin-top: -10%;
  margin-bottom: 50px;
`

const Icon = styled.img`
  position: absolute;
  top: 0%;
  left: 0;
  bottom: 0;
  margin: 0 auto auto auto;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  box-shadow: 0 0 0 4px #7f93c4;
`

const Names = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5%;
`

const ProfileName = styled.h2`
  font-size: 20px;
  /* text-align: center; */
`

const IdlikeName = styled.h4`
  font-size: 14px;
  opacity: 50%;
`

const Bio = styled.div`
  font-size: 16px;
  font-family: 'Noto Sans JP', Roboto;
  padding-bottom: 5%;
`

const Other = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 50%;
  padding-bottom: 2%;
`

const OtherItem = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
`

const OtherItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding-right: 10px;
  height: 20px;
  width: 20px;
`

const OtherItemLabel = styled.span`
  font-family: 'Noto Sans JP', Roboto;
  font-size: 14px;
`

const Home: NextPage = () => {
  return (
    <Container>
      <ContentList>
        <ContentsWrapper>
          <IconWrapper>
            <Icon src="/anon-icon2.png" />
          </IconWrapper>
          <Names>
            <ProfileName>Kota Amasaka</ProfileName>
            <IdlikeName>@sh1ma</IdlikeName>
          </Names>
          <Bio>
            メンヘラプログラマの21歳です。座右の銘は「破壊された日常」です。
          </Bio>
          <Other>
            <OtherItem>
              <OtherItemIcon>
                <FontAwesomeIcon icon={faLink} />
              </OtherItemIcon>
              <Link href={'https://twitter.com/altalkalta'} passHref>
                <OtherItemLabel>https://twitter.com/altalkalta</OtherItemLabel>
              </Link>
            </OtherItem>
            <OtherItem>
              <OtherItemIcon>
                <FontAwesomeIcon icon={faCalendarDay} />
              </OtherItemIcon>
              <OtherItemLabel>
                中学生の頃からプログラミングを始めています
              </OtherItemLabel>
            </OtherItem>
          </Other>
        </ContentsWrapper>
      </ContentList>
    </Container>
  )
}

export default Home
