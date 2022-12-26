import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PostPreview from '../../components/PostPreview'
import { getDatabase } from '../../utils/notion'
import { GlobalContainer, Main } from './styled'

const Blog = ({ posts }: any) => {
  return (
    <>
      <GlobalContainer>
        <Header />
        <Main>
          {posts.map((post: any) => {
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
        <Footer />
      </GlobalContainer>
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
