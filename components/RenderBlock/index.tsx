import { TextH1, TextH2, TextH3, TextParagraph } from './styled'

interface Props {
  elem: any
}

const RenderBlock = ({ elem }: Props): JSX.Element | null => {
  const blockType: string = elem.type
  const detailsBlock = elem[blockType]

  switch (blockType) {
    case 'paragraph':
      return (
        <TextParagraph>{detailsBlock.rich_text[0]?.plain_text}</TextParagraph>
      )
    case 'heading_1':
      return <TextH1>{detailsBlock.rich_text[0]?.plain_text}</TextH1>
    case 'heading_2':
      return <TextH2>{detailsBlock.rich_text[0]?.plain_text}</TextH2>
    case 'heading_3':
      return <TextH3>{detailsBlock.rich_text[0]?.plain_text}</TextH3>
    default:
      return null
  }
}

export default RenderBlock
