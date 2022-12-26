import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jorge Agoiz Website</title>
        <meta name="description" content="Jorge Agoiz personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}
