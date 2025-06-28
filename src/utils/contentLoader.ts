// Content loader utility for blog posts
// Note: In a static site, we'll import the content directly
// This provides a foundation for future dynamic content loading

export interface BlogPostMetadata {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  metaDescription: string;
  seoKeywords: string[];
}

// Import content and metadata directly for static site generation
import bestTimeContent from '../content/blog/best-time-sell-my-business-singapore.md?raw';
import bestTimeMetadata from '../content/blog/best-time-sell-my-business-singapore.json';

export const blogPostsMetadata: BlogPostMetadata[] = [
  bestTimeMetadata as BlogPostMetadata
];

export const getPostContent = (slug: string): string | null => {
  switch (slug) {
    case 'best-time-sell-sme-singapore-market-cycles-valuations-timing':
      return bestTimeContent;
    default:
      return null;
  }
};

export const getFeaturedPosts = (): BlogPostMetadata[] => {
  return blogPostsMetadata.filter(post => post.featured);
};

export const getPostBySlug = (slug: string): (BlogPostMetadata & { content: string }) | undefined => {
  const metadata = blogPostsMetadata.find(post => post.slug === slug);
  const content = getPostContent(slug);
  
  if (metadata && content) {
    return { ...metadata, content };
  }
  
  return undefined;
};

export const getAllPosts = (): BlogPostMetadata[] => {
  return blogPostsMetadata.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};