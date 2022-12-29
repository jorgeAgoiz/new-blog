import Head from 'next/head'
import { Title, Main } from './styled'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Inicio - Jorge Agoiz Website</title>
        <meta name="description" content="Jorge Agoiz personal website" />
        <link rel="icon" href="/icon-palm-tree.png" />
      </Head>

      <Main>
        <Title>Jorge Agoiz Website</Title>
      </Main>
    </>
  )
}

export default Home
