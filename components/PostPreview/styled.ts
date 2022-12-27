import Link from 'next/link'
import styled from 'styled-components'
import { bangers, indieFlower } from '../../utils/fonts'

export const Card = styled(Link)`
  background: white;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 310px;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;

  &:hover {
    top: -3px;
    box-shadow: 0 6px 7px rgba(0, 0, 0, 0.2);
  }
`
export const Article = styled.article`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  color: #333;
  font-family: ${bangers.style.fontFamily};
  letter-spacing: 2px;
  font-weight: 400;
`

export const Date = styled.span`
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: bold;
  font-family: ${indieFlower.style.fontFamily};
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 2em 0 0 0;
`
export const Thumb = styled.div<{ backgroundImage: string }>`
  padding-bottom: 60%;
  background-size: cover;
  background-position: center center;
  background-image: ${p =>
    p.backgroundImage
      ? `url(${p.backgroundImage})`
      : 'url(images/michael-dziedzic-unsplash.jpg)'};
`
