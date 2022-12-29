import Head from 'next/head'
import PostPreview from '../../components/PostPreview'
import { getDatabase } from '../../utils/notion'
import { Main } from './styled'
/* 
  {
    object: 'page',
    id: '52c1c9b7-aa4a-451a-8045-a3f0d512120f',
    created_time: '2022-12-27T18:27:00.000Z',
    last_edited_time: '2022-12-27T18:31:00.000Z',
    created_by: { object: 'user', id: 'e7820edf-7166-4efd-acef-5220afdcfc56' },
    last_edited_by: { object: 'user', id: 'e7820edf-7166-4efd-acef-5220afdcfc56' },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: '0e46fa38-9a05-4f48-a887-a8b91a49362c'
    },
    archived: false,
    properties: { Picture: [Object], Publish: [Object], Name: [Object] },
    url: 'https://www.notion.so/Probando-Notion-API-52c1c9b7aa4a451a8045a3f0d512120f'
  }
*/

interface Post {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: object
  cover: null
  icon: null
  parent: object
  archived: boolean
  properties: object
  url: string
}

interface Props {
  posts: Array<Post>
}

const Blog = ({ posts }: Props): JSX.Element => {
  console.log(posts)
  return (
    <>
      <Head>
        <title>Blog - Jorge Agoiz Website</title>
        <meta name="description" content="Jorge Agoiz personal website" />
        <link rel="icon" href="/icon-palm-tree.png" />
      </Head>
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
