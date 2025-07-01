export { Page }

import React from 'react'
import Layout from '../../../components/Layout'
import '../../../index.css'
import { Badge } from '@/components/ui/badge'
import { Clock, User, Calendar, ArrowLeft, Share2 } from 'lucide-react'

interface PageProps {
  post: any
  slug: string
}

function Page({ post, slug }: PageProps) {
  console.log('Props received - post:', !!post, 'slug:', slug)
  
  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <h1>Error: Blog post not found</h1>
          <p>Debug: Slug: {slug || 'undefined'}</p>
          <p>Debug: Post available: {!!post ? 'YES' : 'NO'}</p>
        </div>
      </Layout>
    )
  }
  
  // post is already available from getPostBySlug
  
  // Content formatting function
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    let inList = false;
    let listItems: JSX.Element[] = [];
    const elements: JSX.Element[] = [];
    let elementIndex = 0;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elementIndex++}`} className="space-y-3 mb-8 ml-6">
            {listItems}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={elementIndex++} className="text-4xl md:text-5xl font-serif text-eaststreet-darkest mb-8 mt-12 first:mt-0 leading-tight">
            {trimmedLine.replace('# ', '')}
          </h1>
        );
      }
      else if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <div key={elementIndex++} className="mt-16 mb-8 first:mt-8">
            <div className="w-16 h-1 bg-eaststreet-primary mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-eaststreet-darkest mb-6 leading-tight">
              {trimmedLine.replace('## ', '')}
            </h2>
          </div>
        );
      }
      else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={elementIndex++} className="text-2xl md:text-3xl font-serif text-eaststreet-darkest mb-6 mt-12 leading-tight">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      }
      else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        flushList();
        elements.push(
          <div key={elementIndex++} className="bg-eaststreet-lightest border-l-4 border-eaststreet-primary p-6 mb-8 rounded-r-lg">
            <h4 className="text-xl font-bold text-eaststreet-darkest mb-0">
              {trimmedLine.replace(/\*\*/g, '')}
            </h4>
          </div>
        );
      }
      else if (trimmedLine.startsWith('- ')) {
        if (!inList) {
          inList = true;
        }
        const listContent = trimmedLine.replace('- ', '');
        const formattedContent = listContent.replace(/\*\*(.*?)\*\*/g, '<strong class="text-eaststreet-darkest font-semibold">$1</strong>');
        
        listItems.push(
          <li key={`li-${elementIndex++}`} className="flex items-start">
            <div className="w-2 h-2 bg-eaststreet-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
            <span 
              className="text-gray-700 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formattedContent }}
            />
          </li>
        );
      }
      else if (trimmedLine === '') {
        if (!inList) {
          elements.push(<div key={elementIndex++} className="mb-6"></div>);
        }
      }
      else if (trimmedLine.length > 0) {
        flushList();
        const formattedParagraph = trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="text-eaststreet-darkest font-semibold">$1</strong>');
        
        elements.push(
          <p 
            key={elementIndex++}
            className="text-gray-700 mb-6 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: formattedParagraph }}
          />
        );
      }
    });

    flushList();
    return elements;
  };
  
  return (
    <Layout>
      <main className="min-h-screen bg-white">
        {/* Blog Post Header */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-eaststreet-lightest to-white">
          <div className="container mx-auto px-4 md:px-6">
            {/* Breadcrumb */}
            <div className="mb-8 max-w-5xl mx-auto">
              <a 
                href="/blog" 
                className="inline-flex items-center text-eaststreet-dark hover:text-eaststreet-darkest transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </a>
            </div>

            {/* Article Header */}
            <article className="max-w-5xl mx-auto">
              <header className="mb-16">
                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {post.tags.map((tag) => (
                    <Badge key={tag} className="bg-eaststreet-primary/10 text-eaststreet-darkest border border-eaststreet-primary/20 px-4 py-2 text-sm font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-eaststreet-darkest mb-8 leading-tight max-w-4xl">
                  {post.title}
                </h1>

                {/* Excerpt */}
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-4xl">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-8 text-eaststreet-dark mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-eaststreet-primary rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-lg">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-eaststreet-primary" />
                    <span className="text-lg">{new Date(post.publishDate).toLocaleDateString('en-SG', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-eaststreet-primary" />
                    <span className="text-lg">{post.readTime}</span>
                  </div>
                </div>

                {/* Cover Image */}
                {post.coverImage && (
                  <div className="mt-12 mb-8">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                )}

                {/* Share Button */}
                <div className="flex items-center justify-between pt-8 border-t border-eaststreet-light/50">
                  <div className="flex-1"></div>
                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: post.title,
                          text: post.excerpt,
                          url: window.location.href,
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }
                    }}
                    className="flex items-center space-x-2 text-eaststreet-darkest hover:text-eaststreet-primary transition-colors border border-eaststreet-light px-6 py-3 rounded-lg hover:bg-eaststreet-lightest/50"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share Article</span>
                  </button>
                </div>
              </header>
            </article>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <article className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-slate max-w-none">
                <div className="article-content">
                  {formatContent(post.content)}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Article Footer */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <footer className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-gray-600 font-medium">Article Tags:</span>
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-eaststreet-primary/30 text-eaststreet-darkest hover:bg-eaststreet-primary/10 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: post.title,
                          text: post.excerpt,
                          url: window.location.href,
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }
                    }}
                    className="flex items-center space-x-2 text-eaststreet-darkest hover:text-eaststreet-primary transition-colors bg-eaststreet-lightest hover:bg-eaststreet-light px-6 py-3 rounded-lg font-medium"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share Article</span>
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-eaststreet-darkest to-eaststreet-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                Ready to Sell Your Business?
              </h2>
              <p className="text-xl text-eaststreet-light mb-10 leading-relaxed">
                If you're ready to explore selling your SME in Singapore, our team of experienced M&A professionals 
                can help you navigate the process and optimize your timing for maximum value.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/valuation" 
                  className="bg-eaststreet-primary hover:bg-eaststreet-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Get Free Business Valuation
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-eaststreet-light text-eaststreet-light hover:bg-eaststreet-light hover:text-eaststreet-darkest px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to Other Articles */}
        <section className="py-16 bg-eaststreet-lightest">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-serif text-eaststreet-darkest mb-8">
                Explore More Business Insights
              </h3>
              <a 
                href="/blog" 
                className="inline-flex items-center text-eaststreet-darkest hover:text-eaststreet-primary font-medium text-lg transition-colors bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                View All Articles
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}