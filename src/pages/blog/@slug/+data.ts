export { data }

import { getPostBySlug } from '../../../utils/contentLoader'
import type { PageContextServer } from 'vike/types'

async function data(pageContext: PageContextServer) {
  const slug = pageContext.routeParams?.slug
  
  console.log('Data hook - slug:', slug)
  
  if (!slug) {
    throw new Error('Blog post slug is required')
  }
  
  const post = getPostBySlug(slug)
  
  console.log('Data hook - post found:', !!post)
  
  if (!post) {
    throw new Error(`Blog post not found: ${slug}`)
  }
  
  // For server-side only rendering, pass data via pageContext
  pageContext.pageProps = {
    post,
    slug
  }
  
  return {
    post,
    slug,
  }
}

export type Data = Awaited<ReturnType<typeof data>>