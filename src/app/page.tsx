
import styles from './page.module.css'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <button className=''>
        <a className='btn-enter' href="/api/auth/login">Log in</a>
      </button>
    </main>
  )
}
