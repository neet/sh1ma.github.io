import styles from 'styles/About.module.scss'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.title}>自己紹介</div>
      <div className={styles.intro}>
        <p>sh1ma(しま)です。21歳です。プログラマです。</p>
        <p>
          不登校だった中学時代にプログラミングと出会いました。以来、挫折を繰り返しながら社会に適合しようと頑張っています。でもいつも死にたいとは思ってます。
        </p>
      </div>
    </div>
  )
}

export default About
