import { NavLink, Wrapper } from './styled'

const Header = (): JSX.Element => {
  return (
    <Wrapper aria-label="Cabecera de página">
      <NavLink href="/" aria-label="Ir a la Home">
        Home
      </NavLink>
      <NavLink href="/blog" aria-label="Ir al Blog">
        Blog
      </NavLink>
      <NavLink href="/about" aria-label="Ir a sección About">
        About
      </NavLink>
    </Wrapper>
  )
}

export default Header
