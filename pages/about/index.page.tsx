import { Content, Main, Video, TextH2, Section } from './styled'

const About = (): JSX.Element => {
  return (
    <>
      <Main>
        <Video autoPlay loop>
          <source src="video/PalmTreeVideo.mp4" type="video/mp4" />
          <img
            src="images/michael-dziedzic-unsplash.jpg"
            alt="Video no soportado"
          />
          Su navegador no soporta este formato de video.
        </Video>
        <Section>
          <Content>
            <TextH2>
              Yo soy la palmera que se dobla pero aguanta el huracán
            </TextH2>
          </Content>
        </Section>
        <div>
          <h1>Hola ke ASE</h1>
        </div>
      </Main>
    </>
  )
}

export default About
