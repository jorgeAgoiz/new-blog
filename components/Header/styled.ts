import Link from 'next/link'
import styled from 'styled-components'

export const Wrapper = styled.header`
  background: white;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: black;

  &:hover {
    color: orange;
  }
`
