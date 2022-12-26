import styled from 'styled-components'
import { indieFlower } from '../utils/fonts'

export const GlobalContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url('images/joe-woods-unsplash.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-family: ${indieFlower.style.fontFamily};
  font-size: 3.6rem;
  font-weight: bold;
  color: black;
  text-align: center;
  letter-spacing: 2px;
`
