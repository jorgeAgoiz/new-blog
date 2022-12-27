import { PartialBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { dateParser } from '../../../utils/dateParser'
import { getDatabase, getPage, getBlocks } from '../../../utils/notion'
import { DateText, DetailsContainer, GlobalContainer, Title } from './styled'

interface Props {
  page: any
  content: any
}

export const Post = ({ page, content }: Props) => {
  const { Name, Description, Publish, PublishDate /* , Picture  */ } =
    page.properties

  console.log({ page, content })

  content.forEach((elem: any) => {
    const { type }: any = elem
    console.log(elem[type])
  })
  // Render a custom block depends the type

  return (
    <GlobalContainer>
      <DetailsContainer>
        <Title>{Name.title[0].plain_text}</Title>
        <DateText>{dateParser(PublishDate.date.start)}</DateText>
      </DetailsContainer>
    </GlobalContainer>
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
