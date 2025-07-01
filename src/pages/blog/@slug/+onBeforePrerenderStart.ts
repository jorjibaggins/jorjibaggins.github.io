export { onBeforePrerenderStart }

import { getAllPosts } from '../../../utils/contentLoader'

async function onBeforePrerenderStart() {
  const posts = getAllPosts()
  
  // Just return the URLs for prerendering
  const urls = posts.map(post => `/blog/${post.slug}`)
  
  console.log('onBeforePrerenderStart returning URLs:', urls)
  return urls
}