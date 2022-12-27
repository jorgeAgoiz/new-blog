import Link from 'next/link'
import styled from 'styled-components'
import { rockSalt } from '../../utils/fonts'

export const Wrapper = styled.header`
  background: white;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  font-family: ${rockSalt.style.fontFamily};
  box-shadow: 0px 15px 10px -15px #111;
  opacity: 0.9;
  position: fixed;
  top: 0;
  z-index: 99;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: black;
  opacity: 1;

  &:hover {
    color: orange;
  }
`
