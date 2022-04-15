import styles from 'components/CommonHeader/CommonHeader.module.scss'
import Link from 'next/link'

export const CommonHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>
          <Link href="/">sh1ma.dev</Link>
        </div>
        <div>
          <ul className={styles.headerLinkList}>
            <li>
              <Link href="/about">About</Link>
            </li>
            {/* <li>
              <a href="/links">Links</a>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  )
}
