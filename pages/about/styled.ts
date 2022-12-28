import styled from 'styled-components'
import { indieFlower, bangers } from '../../utils/fonts'

export const Main = styled.main`
  width: 100%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 7rem;
  margin-top: 6rem;
`
export const Title = styled.h1`
  font-family: ${indieFlower.style.fontFamily};
  font-size: 1.6rem;
  font-weight: bold;
  color: black;
  text-align: center;
  letter-spacing: 2px;
`
export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextH2 = styled.h2`
  font-size: 4rem;
  text-transform: uppercase;
  color: black;
  font-family: ${bangers.style.fontFamily};
  text-align: center;
`

export const Video = styled.video`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  pointer-events: none;
  opacity: 0.4;
`
export const Content = styled.div``
