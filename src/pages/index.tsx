import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Delay } from 'utils/delay'
import { generateCgaracterByStep } from 'utils/generateCharacterbyStep'
import styled, { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #7f93c4;
  padding-top: 72px;
`

const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Icon = styled.img`
  border-radius: 50%;
  height: 140px;
  width: 140px;
  margin-bottom: 6vh;

  ${media.lessThan('small')`
    height: 110px;
    width: 110px;
    margin-bottom: 10vh;
  `}
`

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;

  ${media.lessThan('small')`
    gap: 0;
  `}
`

type ProfileTitleProps = {
  className?: string
}

const ProfileTitle: React.FC = (props: ProfileTitleProps) => {
  const names = ['talka', 'Toka Takatsukasa', 'Kota Amasaka', 'sh1ma']
  const [name, setName] = useState('')

  const setNameWithDelay = async (name: string, seconds: number) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(setName(name)), 1000 * seconds)
    })
  }

  useEffect(() => {
    const changeName = async () => {
      for (let i = 0; names.length > i; i++) {
        for await (const currentName of generateCgaracterByStep(names[i])) {
          await setNameWithDelay(currentName, 0.06)
        }
        await Delay(1)
      }
    }
    changeName()
  }, [])

  return <div className={props.className}>I&apos;m {name}</div>
}

const ProfileTitleStyled = styled(ProfileTitle)`
  font-size: 2em;

  ${media.lessThan('small')`
    font-size: 2em;
    padding-bottom: 2vh;
  `}
`

const ProfileSubTitle = styled.div`
  font-size: 1.5em;

  ${media.lessThan('small')`
    font-size: 1em;
  `}
`

const Home: NextPage = () => {
  return (
    <Container>
      <ContentList>
        <Icon src="/anon-icon2.png" />
        <Titles>
          <ProfileTitleStyled />
          <ProfileSubTitle>Menhera SoftWare Engineer</ProfileSubTitle>
        </Titles>
      </ContentList>
    </Container>
  )
}

export default Home
