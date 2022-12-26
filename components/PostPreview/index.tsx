import { dateParser } from '../../utils/dateParser'
import {
  FigureAnchor,
  Media,
  FigCaption,
  Figure,
  Svg,
  FigCaptionBody,
  SvgText,
  SvgRectAlpha,
  SvgRectBase
} from './styled'

const PostPreview = (): JSX.Element => {
  return (
    <div style={{ width: '500px' }}>
      <Figure>
        <Media />
        <FigCaption>
          <Svg
            viewBox="0 0 200 200"
            version="1.1"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <SvgRectAlpha x="0" y="0" width="100%" height="100%" />
                <SvgText dx="50%" dy="2.5em">
                  ENJOY
                </SvgText>
                <SvgText dx="50%" dy="3.5em">
                  EVERY
                </SvgText>
                <SvgText dx="50%" dy="4.5em">
                  MOMENT
                </SvgText>
              </mask>
            </defs>
            <SvgRectBase x="0" y="0" width="100%" height="100%" />
          </Svg>
          <FigCaptionBody>
            <p>
              Enamel pin selvage health goth edison bulb, venmo glossier
              tattooed hella butcher cred iPhone.
            </p>
          </FigCaptionBody>
        </FigCaption>
        <FigureAnchor href="#" />
      </Figure>
    </div>
  )
}

export default PostPreview
