import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { dateParser } from '../../../utils/dateParser'
import { getDatabase, getPage, getBlocks } from '../../../utils/notion'
import {
  DateText,
  DetailsContainer,
  Main,
  TextContainer,
  TextH1,
  TextH2,
  TextH3,
  TextParagraph,
  Title
} from './styled'

interface Props {
  page: any
  content: any
}

export const Post = ({ page, content }: Props) => {
  const { Name } = page.properties

  const renderBlock = (elem: any) => {
    const blockType: string = elem.type
    const detailsBlock = elem[blockType]

    switch (blockType) {
      case 'paragraph':
        return (
          <TextParagraph key={elem.id}>
            {detailsBlock.rich_text[0]?.plain_text}
          </TextParagraph>
        )
      case 'heading_1':
        return (
          <TextH1 key={elem.id}>{detailsBlock.rich_text[0]?.plain_text}</TextH1>
        )
      case 'heading_2':
        return (
          <TextH2 key={elem.id}>{detailsBlock.rich_text[0]?.plain_text}</TextH2>
        )
      case 'heading_3':
        return (
          <TextH3 key={elem.id}>{detailsBlock.rich_text[0]?.plain_text}</TextH3>
        )
      default:
        return null
    }
  }

  return (
    <>
      <Main>
        <DetailsContainer>
          <Title>{Name?.title[0]?.plain_text}</Title>
          <DateText>{dateParser(page.last_edited_time!)}</DateText>
        </DetailsContainer>
        <TextContainer>
          {content.map((elem: any) => renderBlock(elem))}
        </TextContainer>
      </Main>
    </>
  )
}

export const getStaticPaths = async () => {
  const dbId: string = process.env.NOTION_DB_ID!
  const database = await getDatabase(dbId)
  const paths = database.map(post => {
    return {
      params: {
        postId: post.id
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: { params: Params }) => {
  const { postId } = params
  const page = await getPage(postId)
  const content = await getBlocks(postId)

  return {
    props: {
      page,
      content
    },
    revalidate: 1
  }
}

export default Post
