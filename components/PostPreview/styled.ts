import styled from 'styled-components'

export const Media = styled.div`
  background-position: center;
  background-size: cover;
  height: 100%;
  position: absolute;
  transition: all 0.3s ease;
  width: 100%;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_15.png');
`
export const Figure = styled.figure`
  height: 370px;
  overflow: hidden;
  position: relative;

  &:hover ${Media} {
    transform: scale(1.25);
  }
`

export const FigureAnchor = styled.a`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
`
export const FigCaption = styled.figcaption`
  color: #252830;
  height: calc(100% - 30px);
  margin: 15px;
  left: 0;
  position: absolute;
  top: 0;
  width: 250px;
`
export const Svg = styled.svg`
  height: inherit;
  width: 100%;
`

export const SvgText = styled.text`
  text-anchor: middle;
  font-size: 28px;
  font-family: 'Montserrat';
  letter-spacing: 5px;
`

export const SvgRectAlpha = styled.rect`
  fill: white;
`
export const SvgRectBase = styled.rect`
  fill: white;
  -webkit-mask: url(#mask);
  mask: url(#mask);
`

export const FigCaptionBody = styled.div`
  background-color: white;
  bottom: 0;
  padding: 15px;
  position: absolute;
  width: 100%;
`
