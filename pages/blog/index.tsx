import Header from '../../components/Header'
import PostPreview from '../../components/PostPreview'
import { getDatabase } from '../../utils/notion'
import { GlobalContainer } from './styled'

const Blog = ({ posts }: any) => {
  return (
    <GlobalContainer>
      <Header />
      <main style={{ marginTop: '6rem', color: 'black' }}>
        <h1>Sección BLOG</h1>
        {posts.map((post: any) => {
          return <PostPreview key={post.id} />
        })}
      </main>
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
