# Blog Content Management

This directory contains all blog post content and metadata in separate, easily editable files.

## File Structure

For each blog post, you need two files:
1. `[slug].md` - The main content in Markdown format
2. `[slug].json` - Metadata and SEO information

## Adding a New Blog Post

### Step 1: Create the Content File
Create a new `.md` file with your blog post slug as the filename:
```
src/content/blog/your-new-post-slug.md
```

Write your content in Markdown format. You can use:
- `#` for main headings
- `##` for section headings  
- `###` for subsection headings
- `**bold text**` for emphasis
- Lists, links, and other standard Markdown

### Step 2: Create the Metadata File
Create a corresponding `.json` file:
```
src/content/blog/your-new-post-slug.json
```

Use this template:
```json
{
  "id": "unique-id",
  "title": "Your Blog Post Title",
  "slug": "your-new-post-slug",
  "excerpt": "A brief description that appears in the blog listing",
  "author": "East Street Advisory Team",
  "publishDate": "2024-01-15",
  "readTime": "8 min read",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "featured": false,
  "metaDescription": "SEO meta description for search engines",
  "seoKeywords": ["keyword1", "keyword2", "keyword3"]
}
```

### Step 3: Update the Content Loader
Add your new post to `/src/utils/contentLoader.ts`:

1. Import the content and metadata:
```typescript
import yourPostContent from '../content/blog/your-new-post-slug.md?raw';
import yourPostMetadata from '../content/blog/your-new-post-slug.json';
```

2. Add to the metadata array:
```typescript
export const blogPostsMetadata: BlogPostMetadata[] = [
  bestTimeMetadata as BlogPostMetadata,
  yourPostMetadata as BlogPostMetadata  // Add this line
];
```

3. Add to the content function:
```typescript
export const getPostContent = (slug: string): string | null => {
  switch (slug) {
    case 'best-time-sell-sme-singapore-market-cycles-valuations-timing':
      return bestTimeContent;
    case 'your-new-post-slug':  // Add this case
      return yourPostContent;
    default:
      return null;
  }
};
```

### Step 4: Create the Page Route
Create a new page file at:
```
src/pages/blog/your-new-post-slug.page.tsx
```

Use this template:
```typescript
export { Page }
export { documentProps }

import React from 'react'
import Layout from '../../components/Layout'
import BlogPost from '../BlogPost'
import '../../index.css'

function Page() {
  return (
    <Layout>
      <BlogPost slug="your-new-post-slug" />
    </Layout>
  )
}

const documentProps = {
  title: 'Your Blog Post Title - East Street Advisory',
  description: 'Your meta description here'
}
```

## Editing Existing Posts

To edit an existing blog post:

1. **Content**: Edit the `.md` file directly
2. **Metadata**: Edit the `.json` file to update title, tags, etc.
3. **SEO**: Update the `metaDescription` and `seoKeywords` in the `.json` file

## SEO Best Practices

- Keep titles under 60 characters
- Write compelling meta descriptions (150-160 characters)
- Use relevant keywords naturally in content
- Include Singapore-specific terms when relevant
- Tag posts with relevant categories
- Set `featured: true` for important posts to highlight them

## Content Guidelines

- Write for Singapore business owners
- Include practical, actionable advice
- Use local examples and case studies
- Reference Singapore regulations and market conditions
- Maintain professional tone while being accessible
- Include internal links to your services pages where relevant