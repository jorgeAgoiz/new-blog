import Head from 'next/head'
import { Title, Main } from './styled'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jorge Agoiz Website</title>
        <meta name="description" content="Jorge Agoiz personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>Jorge Agoiz Website</Title>
      </Main>
    </>
  )
}
