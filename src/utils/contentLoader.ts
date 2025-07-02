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
  coverImage?: string;
  metaDescription: string;
  seoKeywords: string[];
}

// Auto-import all blog post metadata and content using Vite's glob import
const metadataModules = import.meta.glob('../content/blog/*.json', { eager: true });
const contentModules = import.meta.glob('../content/blog/*.md', { eager: true, query: '?raw', import: 'default' });

// Filter out README and other non-blog files
const filterBlogFiles = (modules: Record<string, any>): Record<string, any> => {
  const filtered: Record<string, any> = {};
  Object.entries(modules).forEach(([path, module]) => {
    const filename = path.split('/').pop() || '';
    if (!filename.toLowerCase().includes('readme')) {
      filtered[path] = module;
    }
  });
  return filtered;
};

// Extract filename without extension for mapping
const getFilenameKey = (path: string): string => {
  const filename = path.split('/').pop() || '';
  return filename.replace(/\.(json|md)$/, '');
};

// Load and process all blog post metadata
const loadBlogPosts = (): BlogPostMetadata[] => {
  const posts: BlogPostMetadata[] = [];
  
  console.log('Metadata modules found:', Object.keys(metadataModules));
  
  Object.entries(metadataModules).forEach(([path, module]) => {
    console.log('Loading metadata from:', path);
    const metadata = (module as any).default as BlogPostMetadata;
    console.log('Loaded metadata:', metadata);
    posts.push(metadata);
  });
  
  console.log('Total posts loaded:', posts.length);
  return posts;
};

// Cache the loaded posts
export const blogPostsMetadata: BlogPostMetadata[] = loadBlogPosts();

export const getPostContent = (slug: string): string | null => {
  // Filter out README files and find the content file that matches the slug
  const filteredContentModules = filterBlogFiles(contentModules);
  
  console.log('Looking for content with slug:', slug);
  console.log('Available content modules:', Object.keys(filteredContentModules));
  
  for (const [path, content] of Object.entries(filteredContentModules)) {
    const filenameKey = getFilenameKey(path);
    console.log('Checking path:', path, 'filename key:', filenameKey);
    
    if (filenameKey === slug) {
      console.log('Found matching content for slug:', slug);
      return content as string;
    }
  }
  
  console.log('No content found for slug:', slug);
  return null;
};

export const getFeaturedPosts = (): BlogPostMetadata[] => {
  return blogPostsMetadata.filter(post => post.featured);
};

export const getPostBySlug = (slug: string): (BlogPostMetadata & { content: string }) | undefined => {
  console.log('Looking for slug:', slug);
  console.log('Available posts:', blogPostsMetadata.map(p => p.slug));
  
  const metadata = blogPostsMetadata.find(post => post.slug === slug);
  console.log('Found metadata:', metadata);
  
  const content = getPostContent(slug);
  console.log('Found content:', content ? 'YES' : 'NO', content?.length);
  
  if (metadata && content) {
    return { ...metadata, content };
  }
  
  return undefined;
};

export const getAllPosts = (): BlogPostMetadata[] => {
  return blogPostsMetadata.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};