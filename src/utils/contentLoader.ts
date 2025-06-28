// Content loader utility for blog posts
// Uses Vite's glob import to automatically discover and load all blog posts

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

// Auto-import all blog post metadata and content using Vite's glob import
const metadataModules = import.meta.glob('../content/blog/*.json', { eager: true });
const contentModules = import.meta.glob('../content/blog/*.md', { eager: true, query: '?raw', import: 'default' });

// Extract filename without extension for mapping
const getFilenameKey = (path: string): string => {
  const filename = path.split('/').pop() || '';
  return filename.replace(/\.(json|md)$/, '');
};

// Load and process all blog post metadata
const loadBlogPosts = (): BlogPostMetadata[] => {
  const posts: BlogPostMetadata[] = [];
  
  Object.entries(metadataModules).forEach(([, module]) => {
    const metadata = (module as any).default as BlogPostMetadata;
    posts.push(metadata);
  });
  
  return posts;
};

// Cache the loaded posts
export const blogPostsMetadata: BlogPostMetadata[] = loadBlogPosts();

export const getPostContent = (slug: string): string | null => {
  // Find the content file that matches the slug
  for (const [path, content] of Object.entries(contentModules)) {
    const filenameKey = getFilenameKey(path);
    const metadata = blogPostsMetadata.find(post => 
      getFilenameKey(`${post.slug}.json`) === filenameKey || 
      post.slug === slug
    );
    
    if (metadata && metadata.slug === slug) {
      return content as string;
    }
  }
  
  return null;
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