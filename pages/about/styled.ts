import styled from 'styled-components'
import { indieFlower, bangers, edu } from '../../utils/fonts'

export const Main = styled.main`
  width: 100%;
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 7rem;
  margin-top: 6rem;
  gap: 2rem;
`
export const VideoSection = styled.section`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const VideoContent = styled.div`
  background: rgba(255, 255, 255, 0.65);
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`
export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`
export const TextH2 = styled.h2`
  font-size: 4rem;
  text-transform: uppercase;
  color: black;
  font-family: ${bangers.style.fontFamily};
  text-align: center;
`
export const Title = styled.h1`
  font-family: ${indieFlower.style.fontFamily};
  font-size: 3.6rem;
  font-weight: bold;
  color: black;
  text-align: center;
  letter-spacing: 2px;
  text-decoration: underline;
`
export const Section = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const Paragraph = styled.p`
  width: 100%;
  font-size: 2.6rem;
  color: black;
  font-family: ${edu.style.fontFamily};
  text-align: justify;
`
