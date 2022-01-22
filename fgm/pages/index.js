import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '@bit/tecshuttle.mik.header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <h1 className={styles.title}> FGM </h1>
      </main>
    </div>
  )
}
