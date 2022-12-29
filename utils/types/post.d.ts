export interface PictureFiles {
  name: string
  type: string
  file: {
    url: string
    expiry_time: string
  }
}
export interface NameTitle {
  type: string
  text: { content: string | null; link: string | null }
  annotations: object
  plain_text: string
  href: string | null
}
export interface Properties {
  Picture: {
    id: string
    type: string
    files: Array<PictureFiles>
  }
  Publish: {
    id: string
    type: string
    checkbox: boolean
  }
  Name: {
    id: string
    type: string
    title: Array<NameTitle>
  }
}

export interface Post {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by?: object
  cover: object | null
  icon: object | null
  parent?: object | null
  archived: boolean
  properties: Properties
  url: string
}
