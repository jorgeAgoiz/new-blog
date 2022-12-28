import styled from 'styled-components'
import { bangers, indieFlower, rockSalt, swanky } from '../../../utils/fonts'

export const Main = styled.main`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-top: 7rem;
  margin-bottom: 8rem;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: 0px 0px 19px 6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 19px 6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 19px 6px rgba(0, 0, 0, 0.75);
`

export const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: black;
`
export const Title = styled.h1`
  font-size: 2.8rem;
  font-family: ${bangers.style.fontFamily};
  letter-spacing: 2px;
  width: 100%;
  text-align: center;
`
export const DateText = styled.h2`
  font-size: 1.6rem;
  width: 100%;
  text-align: left;
  letter-spacing: 1px;
  font-family: ${indieFlower.style.fontFamily};
`
export const TextH1 = styled.h1`
  font-size: 2rem;
  color: black;
  font-family: ${rockSalt.style.fontFamily};
  text-align: center;
`
export const TextH2 = styled.h2`
  font-size: 2.2rem;
  color: black;
  font-family: ${rockSalt.style.fontFamily};
  text-align: center;
`
export const TextH3 = styled.h3`
  font-size: 2.8rem;
  color: black;
  font-family: ${rockSalt.style.fontFamily};
  text-align: center;
`
export const TextParagraph = styled.p`
  font-size: 1.9rem;
  font-weight: 800;
  color: black;
  text-align: justify;
  font-family: ${swanky.style.fontFamily};
`
export const TextContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`
export const PictureContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`
