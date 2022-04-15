import styles from 'styles/Home.module.scss'
import type { NextPage } from 'next'

import { useEffect, useState } from 'react'

function* textGenerator(text: string): Generator<string> {
  const textStringList = text.split('')
  for (let i = 0; i < textStringList.length; i++) {
    const text = textStringList.slice(0, i + 1)
    console.log(text.join(''))
    yield text.join('')
  }
}

const ProfileTitle = () => {
  const names = ['talka', 'Toka Takatsukasa', 'Kota Amasaka', 'sh1ma']
  const [name, setName] = useState('')

  const delay = async (seconds: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(() => resolve(), seconds * 1000))
  }

  const setNameWithDelay = async (name: string, seconds: number) => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(setName(name)), seconds * 1000)
    )
  }

  const changeName = async () => {
    for (let i = 0; names.length > i; i++) {
      for await (const currentName of textGenerator(names[i])) {
        await setNameWithDelay(currentName, 0.06)
      }
      await delay(1)
    }
  }

  useEffect(() => {
    changeName()
  }, [])

  return <div>I&apos;m {name}</div>
}

const ProfileSubTitle = () => {
  return <div>Menhera Software Engineer</div>
}

const Home: NextPage = () => {
  return (
    <div className={styles.indexContainer}>
      <div>
        <img
          className={styles.profileIcon}
          src="/anon-icon2.png"
          alt="my face"
        />
      </div>
      <div className={styles.profileTitle}>
        <ProfileTitle />
      </div>
      <div className={styles.profileSubTitle}>
        <ProfileSubTitle />
      </div>
    </div>
  )
}

export default Home
