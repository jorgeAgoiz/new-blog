import styled, { Keyframes, keyframes } from 'styled-components'
import { bangers } from '../../utils/fonts'

const waveAnimation: Keyframes = keyframes`
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-15deg);
  }
`

export const GlobalContainer = styled.footer`
  display: flex;
  height: 80px;
  width: 100%;
  background-color: white;
  line-height: 1.3;
  font-family: ${bangers.style.fontFamily};
  opacity: 0.9;
  bottom: 0;
  position: fixed;
  z-index: 99;
`

export const List = styled.ul`
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 24px;
  justify-items: center;
  margin: auto;
  list-style: none;
`

export const ListAnchor = styled.a`
  color: black;
  font-size: 1.4rem;
  letter-spacing: 2px;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.4);

  &:hover {
    box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
  }
`

export const Hand = styled.p`
  font-size: 1.5rem;
`

export const ListItem = styled.li`
  &:last-child {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  &:hover ~ & ${Hand} {
    animation: ${waveAnimation} 0.3s infinite;
  }
`
