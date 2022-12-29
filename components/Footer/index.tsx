import { GlobalContainer, Hand, List, ListAnchor, ListItem } from './styled'

const Footer = (): JSX.Element => {
  return (
    <GlobalContainer aria-label="Pie de página">
      <List>
        <ListItem>
          <ListAnchor
            aria-label="Ir al perfil Linkedin"
            href="https://www.linkedin.com/in/jorge-agoiz-pedraja-78321b39/"
          >
            Linkedin
          </ListAnchor>
        </ListItem>
        <ListItem>
          <ListAnchor
            aria-label="Ir al perfil Github"
            href="https://github.com/jorgeAgoiz"
          >
            Github
          </ListAnchor>
        </ListItem>
        <ListItem>
          <Hand>👋</Hand>
        </ListItem>
      </List>
    </GlobalContainer>
  )
}

export default Footer
