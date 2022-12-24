import { getDatabase, getPage, getBlocks } from '../../utils/notion'

export const Post = ({ post, content }) => {
  console.log({ post, content })

  return <div>Hola Ke ASE</div>
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

export const getStaticProps = async ({ params }: any) => {
  const postId = params.postId
  const post = await getPage(postId)
  const content = await getBlocks(postId)

  return {
    props: {
      post,
      content
    },
    revalidate: 1
  }
}

export default Post
