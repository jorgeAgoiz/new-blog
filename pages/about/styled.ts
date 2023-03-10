import styled from 'styled-components'
import { bangers, edu, indieFlower } from '../../utils/fonts'

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
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  @media (max-width: 768px) {
    padding: 1rem;
  }
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
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`
export const Title = styled.h1`
  font-family: ${indieFlower.style.fontFamily};
  font-size: 3.6rem;
  font-weight: bold;
  color: black;
  text-align: center;
  letter-spacing: 2px;
  text-decoration: underline;
  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`
export const Section = styled.section`
  width: 85%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 95%;
  }
`
export const Paragraph = styled.p`
  width: 100%;
  font-size: 2.6rem;
  color: black;
  font-family: ${edu.style.fontFamily};
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`
