import { Client } from '@notionhq/client'
import {
  GetPageResponse,
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
  const response: any = await notion.pages.retrieve({
    page_id: pageId
  })
  return response
}

export const getBlocks = async (blockId: string) => {
  const blocks = []
  let block
  while (true) {
    const { results, next_block } = await notion.blocks.children.list({
      start_block: block,
      block_id: blockId
    })
    blocks.push(...results)
    if (!next_block) {
      break
    }
    block = next_block
  }
  return blocks
}
