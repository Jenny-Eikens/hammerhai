import { executeQuery } from '@datocms/cda-client'
import { cache } from 'react'

const dedupedPerformRequest = cache(async (serializedArgs) => {
  try {
    return await executeQuery(...JSON.parse(serializedArgs))
  } catch (error) {
    console.error('DatoCMS query failed:', error)
    throw new Error('Failed to fetch data from DatoCMS.')
  }
})

export function performRequest(query, options) {
  return dedupedPerformRequest(
    JSON.stringify([
      query,
      {
        ...options,
        token: process.env.NEXT_DATOCMS_API_TOKEN,
        environment: process.env.NEXT_DATOCMS_ENVIRONMENT,
      },
    ]),
  )
}
