import { GlobalContainer, List, ListAnchor, Hand, ListItem } from './styled'

const Footer = (): JSX.Element => {
  return (
    <GlobalContainer>
      <List>
        <ListItem>
          <ListAnchor href="https://www.linkedin.com/in/jorge-agoiz-pedraja-78321b39/">
            Linkedin
          </ListAnchor>
        </ListItem>
        <ListItem>
          <ListAnchor href="https://github.com/jorgeAgoiz">Github</ListAnchor>
        </ListItem>
        <ListItem>
          <Hand>👋</Hand>
        </ListItem>
      </List>
    </GlobalContainer>
  )
}

export default Footer
