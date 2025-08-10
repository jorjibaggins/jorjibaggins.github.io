export { Head }

import { useData } from 'vike-react/useData'
import { usePageContext } from 'vike-react/usePageContext'
import { getPostBySlug } from '../../../utils/contentLoader'

function Head() {
  const data = useData<{ post: any, slug: string }>()
  const pageContext = usePageContext()
  
  // Try to get post from data first, then fallback to direct lookup
  let post = data?.post
  let slug = data?.slug
  
  if (!post || !slug) {
    // Fallback: extract slug and fetch post directly
    slug = pageContext?.routeParams?.slug || 
           pageContext?.urlOriginal?.split('/blog/')[1]?.split('?')[0]
    
    if (slug) {
      post = getPostBySlug(slug)
    }
  }
  
  if (!post) {
    return (
      <>
        <title>East Street Advisory | Singapore's Top Business Broker</title>
        <meta name="description" content="Blog post not found" />
      </>
    )
  }

  return (
    <>
      <title>{post.title} - East Street Advisory</title>
      <meta name="description" content={post.metaDescription || post.excerpt} />
      <meta name="keywords" content={post.seoKeywords?.join(', ') || ''} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.metaDescription || post.excerpt} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://eaststreetadvisory.sg/blog/${slug}`} />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.metaDescription || post.excerpt} />
      
      {/* Article specific tags */}
      <meta property="article:author" content={post.author} />
      <meta property="article:published_time" content={post.publishDate} />
      {post.tags && post.tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
    </>
  )
}