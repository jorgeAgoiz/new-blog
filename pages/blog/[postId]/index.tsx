import { PartialBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { getDatabase, getPage, getBlocks } from '../../../utils/notion'
import { GlobalContainer } from './styled'

interface Props {
  page: any
  content: PartialBlockObjectResponse[]
}

export const Post = ({ page, content }: Props) => {
  const { Name, Description, Publish, PublishDate /* , Picture  */ } =
    page.properties

  // Meter la imagen
  return (
    <GlobalContainer>
      <h1>{Name.title[0].plain_text}</h1>
      <h3>{Description.rich_text[0].plain_text}</h3>
      <h3>Publicado: {Publish.checkbox ? 'Afirmativo' : 'Invalido'}</h3>
      <h3>
        {new Date(PublishDate.date.start).toLocaleString('en-Us', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}
      </h3>
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
