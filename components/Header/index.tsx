import { NavLink, Wrapper } from './styled'

const Header = (): JSX.Element => {
  return (
    <Wrapper>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/about">About</NavLink>
    </Wrapper>
  )
}

export default Header
