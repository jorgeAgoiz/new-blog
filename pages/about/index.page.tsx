import {
  VideoContent,
  Main,
  Video,
  TextH2,
  VideoSection,
  Section,
  Title,
  Paragraph
} from './styled'

const About = (): JSX.Element => {
  return (
    <>
      <Main>
        <Section>
          <Title>Acerca de mí</Title>
        </Section>
        <VideoSection>
          <Video autoPlay loop muted playsInline>
            <source src="video/PalmTreeVideo.mp4" type="video/mp4" />
            <img
              src="images/michael-dziedzic-unsplash.jpg"
              alt="Video no soportado"
            />
            Su navegador no soporta este formato de video.
          </Video>
          <VideoContent>
            <TextH2>
              Yo soy la palmera que se dobla pero aguanta el huracán
            </TextH2>
          </VideoContent>
        </VideoSection>
        <Section>
          <Paragraph>
            Me llamo Jorge y soy un apasionado/enfermo del desarrollo web que se
            ha montado un rincón donde poder divagar.
          </Paragraph>
          <Paragraph>
            Desarrollador web Full Stack centrado en el ecosistema
            JavaScript/TypeScript. Aunque también me siento comodo creando
            soluciones con Python.
          </Paragraph>
          <Paragraph>
            Podeis poneros en contacto conmigo a traves de mi Linkedin o
            simplemente cotillear mi Github.
          </Paragraph>
          <Paragraph>Un saludo, Jorge.</Paragraph>
        </Section>
      </Main>
    </>
  )
}

export default About
