export interface Block {
  object: string
  id: string
  parent: object
  created_time: string
  last_edited_time: string
  created_by: object
  last_edited_by: object
  has_children: boolean
  archived: false
  type: string
  heading_1?: DetailsBlock
  heading_2?: DetailsBlock
  heading_3?: DetailsBlock
  paragraph?: DetailsBlock
  [key: string]: DetailsBlock
}

export interface DetailsBlock {
  rich_text: Array<RichText>
  is_toggleable?: boolean
  color: string
}

export interface RichText {
  type: string
  text: object
  annotations: object
  plain_text: string
  href: null | string
}
