import { executeQuery } from '@datocms/cda-client'
import { cache } from 'react'
import type { ExecuteQueryOptions } from '@datocms/cda-client'
import type { ClothingType } from '@/types/clothes'
import type { ConcertType } from '@/types/concert'
import type { MusicType } from '@/types/music'

interface HomepageResponse {
  allConcerts: ConcertType[]
  allMusicArticles: MusicType[]
  allClothingArticles: ClothingType[]
}

const dedupedPerformRequest = cache(
  async (serializedArgs: string): Promise<HomepageResponse> => {
    try {
      const [query, options] = JSON.parse(serializedArgs) as [
        string,
        ExecuteQueryOptions,
      ]
      return await executeQuery(query, options)
    } catch (error) {
      console.error('DatoCMS query failed:', error)
      throw new Error('Failed to fetch data from DatoCMS.')
    }
  },
)

export function performRequest(
  query: string,
  options?: ExecuteQueryOptions,
): Promise<HomepageResponse> {
  return dedupedPerformRequest(
    JSON.stringify([
      query,
      {
        ...options,
        token: process.env.NEXT_DATOCMS_API_TOKEN,
        environment: process.env.NEXT_DATOCMS_ENVIRONMENT,
      },
    ]),
  ) as Promise<HomepageResponse>
}
