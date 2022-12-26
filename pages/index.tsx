import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { GlobalContainer, Title } from './styled'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jorge Agoiz Website</title>
        <meta name="description" content="Jorge Agoiz personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalContainer>
        <Header />
        <main>
          <Title>Jorge Agoiz Website</Title>
        </main>
        <Footer />
      </GlobalContainer>
    </>
  )
}
