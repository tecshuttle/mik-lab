import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Header} from '@tecshuttle/mik.shared.header'
import {Footer} from '@tecshuttle/mik.shared.footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michaels.com</title>
      </Head>

      <main className={styles.main}>
        <Header text="H"/>
        <div flex="1">
          <h1 className={styles.title}>
            Michaels.com
          </h1>
        </div>
        <Footer />
      </main>

    </div>
  )
}
