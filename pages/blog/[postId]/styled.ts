import styled from 'styled-components'
import { bangers, indieFlower, rockSalt } from '../../../utils/fonts'

export const GlobalContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url('../images/joe-woods-unsplash.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
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
