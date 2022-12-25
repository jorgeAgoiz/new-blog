import Link from 'next/link'
import Header from '../../components/Header'
import { getDatabase } from '../../utils/notion'

const Blog = ({ posts }: any) => {
  return (
    <>
      <Header />
      <div>
        <h1>Sección BLOG</h1>
        {posts.map((post: any) => {
          const date = new Date(post.created_time).toLocaleString('en-Us', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })
          return (
            <div key={post.id}>
              <span className="text-sm">{date}</span>
              <Link href="/[postId]" as={`/${post.id}`}>
                Link
              </Link>
            </div>
          )
        })}
      </div>
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
