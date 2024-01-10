import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <button>
        <a href="/api/auth/login">login</a>
      </button>
      
    </main>
  )
}
