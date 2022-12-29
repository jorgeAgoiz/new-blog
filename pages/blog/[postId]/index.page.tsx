import Head from 'next/head'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import RenderBlock from '../../../components/RenderBlock'
import { dateParser } from '../../../utils/dateParser'
import { getDatabase, getPage, getBlocks } from '../../../utils/notion'
import {
  DateText,
  DetailsContainer,
  Main,
  PictureContainer,
  TextContainer,
  Title
} from './styled'
import Image from 'next/image'
import { PictureFiles, Post } from '../../../utils/types/post'
import { Block } from '../../../utils/types/block'

interface Props {
  page: Post
  content: Array<Block>
}

export const PostPage = ({ page, content }: Props) => {
  const { Name } = page.properties
  const pictures: Array<PictureFiles> = page.properties.Picture.files

  return (
    <>
      <Head>
        <title>{Name?.title[0]?.plain_text} - Jorge Agoiz Website</title>
        <meta name="description" content="Jorge Agoiz personal website" />
        <link rel="icon" href="/icon-palm-tree.png" />
      </Head>
      <Main>
        <DetailsContainer>
          <Title>{Name?.title[0]?.plain_text}</Title>
          <DateText>{dateParser(page.last_edited_time!)}</DateText>
        </DetailsContainer>
        <TextContainer>
          {content.map((elem: Block) => (
            <RenderBlock key={elem.id} elem={elem} />
          ))}
        </TextContainer>
        <PictureContainer>
          {pictures.map((image: PictureFiles) => {
            return (
              <Image
                key={image.name}
                alt={image.name}
                src={image.file.url}
                width={400}
                height={400}
                priority
              />
            )
          })}
        </PictureContainer>
      </Main>
    </>
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

export default PostPage
