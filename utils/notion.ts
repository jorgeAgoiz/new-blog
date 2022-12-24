import { Client } from '@notionhq/client'
import {
  GetPageResponse,
  ListBlockChildrenResponse,
  PartialBlockObjectResponse,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'

const notion = new Client({
  auth: process.env.NOTION_INTEGRATION_TOKEN
})

export const getDatabase = async (databaseId: string) => {
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: databaseId
  })
  return response.results
}

export const getPage = async (pageId: string) => {
  const response: GetPageResponse = await notion.pages.retrieve({
    page_id: pageId
  })
  return response
}

export const getBlocks = async (
  blockId: string
): Promise<PartialBlockObjectResponse[]> => {
  const blocks = []
  let hasMoreBlocks = true
  while (hasMoreBlocks) {
    const response: ListBlockChildrenResponse =
      await notion.blocks.children.list({
        block_id: blockId
      })
    blocks.push(...response.results)
    if (!response.has_more) {
      break
    }
    hasMoreBlocks = response.has_more
  }
  return blocks
}
