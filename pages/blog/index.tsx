import Header from '../../components/Header'
import PostPreview from '../../components/PostPreview'
import { getDatabase } from '../../utils/notion'
import { GlobalContainer, Main } from './styled'

const Blog = ({ posts }: any) => {
  return (
    <GlobalContainer>
      <Header />
      <Main>
        {posts.map((post: any) => {
          return <PostPreview key={post.id} />
        })}
      </Main>
    </GlobalContainer>
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
