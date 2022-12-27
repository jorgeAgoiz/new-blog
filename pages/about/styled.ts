import styled from 'styled-components'
import { indieFlower } from '../../utils/fonts'

export const Main = styled.main`
  width: 100%;
  height: 92vh;
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
