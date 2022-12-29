import Head from 'next/head'
import PostPreview from '../../components/PostPreview'
import { getDatabase } from '../../utils/notion'
import { Post } from '../../utils/types/post'
import { Main } from './styled'

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
