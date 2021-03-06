import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '@tecshuttle/mik.shared.header'
import { Footer } from '@tecshuttle/mik.shared.footer'
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function MfLayout({ title, children }) {
  const router = useRouter()

  console.log(router);

  const isActive = (pathname) => {
    return router.pathname === pathname ? 'bold' : ''
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>buyertools</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div style={{ height: '100%', width: '100%', padding: '1em' }}>
          <h1 className={styles.title}>{title}</h1>
          <hr />
          <div style={{ display: 'flex' }}>
            <div style={{ height: '100%', width: '200px' }}>
              <p><Link href="/mf" ><a style={{ fontWeight: isActive('/mf') }}>MF</a></Link></p>
              <p><Link href="/mf/pick-up"><a style={{ fontWeight: isActive('/mf/pick-up') }}>Pick Up</a></Link></p>
              <p><Link href="/mf/fgm1"><a style={{ fontWeight: isActive('/mf/fgm1') }}>FGM1</a></Link></p>
              <p><Link href="/mf/fgm2"><a style={{ fontWeight: isActive('/mf/fgm2') }}>FGM2</a></Link></p>
            </div>
            <div flex="1">
              {children}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}
