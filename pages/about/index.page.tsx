import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Title } from './styled'
import { GlobalContainer } from './styled'

const About = () => {
  return (
    <>
      <GlobalContainer>
        <Header />
        <main>
          <Title>Sección About Me</Title>
        </main>
        <Footer />
      </GlobalContainer>
    </>
  )
}

export default About
