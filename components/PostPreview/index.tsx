import { dateParser } from '../../utils/dateParser'
import { Article, Card, Date, Thumb, Title } from './styled'

interface Props {
  title: string
  editedAt: string
  id: string
  picture: string
}

const PostPreview = ({ title, editedAt, id, picture }: Props): JSX.Element => {
  return (
    <Card href={`blog/${id}`}>
      <Thumb backgroundImage={picture} />
      <Article>
        <Title>{title}</Title>
        <Date>{dateParser(editedAt)}</Date>
      </Article>
    </Card>
  )
}

export default PostPreview
