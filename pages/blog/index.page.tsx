import Head from 'next/head'
import PostPreview from '../../components/PostPreview'
import { getDatabase } from '../../utils/notion'
import { Main } from './styled'

interface PictureFiles {
  name: string
  type: string
  file: {
    url: string
    expiry_time: string
  }
}
interface NameTitle {
  type: string
  text: { content: string | null; link: string | null }
  annotations: object
  plain_text: string
  href: string | null
}
interface Properties {
  Picture: {
    id: string
    type: string
    files: Array<PictureFiles>
  }
  Publish: {
    id: string
    type: string
    checkbox: boolean
  }
  Name: {
    id: string
    type: string
    title: Array<NameTitle>
  }
}

interface Post {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by?: object
  cover: object | null
  icon: object | null
  parent?: object | null
  archived: boolean
  properties: Properties
  url: string
}

interface Props {
  posts: Array<Post>
}

const Blog = ({ posts }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blog - Jorge Agoiz Website</title>
        <meta name="description" content="Jorge Agoiz personal website" />
        <link rel="icon" href="/icon-palm-tree.png" />
      </Head>
      <Main>
        {posts.map((post: Post) => {
          return (
            <PostPreview
              key={post.id}
              title={post.properties.Name.title[0].plain_text}
              editedAt={post.last_edited_time}
              picture={post.properties.Picture?.files[0]?.file?.url}
              id={post.id}
            />
          )
        })}
      </Main>
    </>
  )
}

export const getStaticProps = async () => {
  const dbId: string = process.env.NOTION_DB_ID!
  const database = await getDatabase(dbId)

  return {
    props: {
      posts: database
    },
    revalidate: 1
  }
}

export default Blog
