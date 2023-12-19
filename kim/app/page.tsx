import styles from './page.module.css'
import Link from 'next/link';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <ul>
          <Link href="#kim"><li>김우진</li></Link>
          <Link href="#bang"><li>방승희</li></Link>
          <Link href="#jung"><li>정영식</li></Link>
          <Link href="#choi"><li>최성민</li></Link>
        </ul>
      </div>
      <div className={styles.board}>
      </div>
    </main>
  )
}
