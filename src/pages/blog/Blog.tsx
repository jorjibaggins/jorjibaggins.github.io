import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { getAllPosts } from '@/utils/contentLoader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Calendar } from 'lucide-react';

const Blog = () => {
  const allPosts = getAllPosts();
  
  return (
    <main className="min-h-screen bg-eaststreet-lightest">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/272bd5d9-14bc-4ae8-867a-1f28040eaf3e.png" 
            alt="Singapore business insights" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-3xl mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4" style={{ fontFamily: 'Forum, serif' }}>
                Business Insights & Market Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Expert analysis on Singapore's M&A market, business valuations, and strategic exits
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* All Posts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Latest Articles" centered={true} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {allPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                {/* Cover Image */}
                {post.coverImage && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} className="bg-white/90 text-eaststreet-darkest border-0">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <CardHeader className="pb-4 flex-grow">
                  {!post.coverImage && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="border-eaststreet-primary text-eaststreet-darkest">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <CardTitle className="text-xl font-serif text-eaststreet-darkest hover:text-eaststreet-dark transition-colors line-clamp-2">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </CardTitle>
                  <CardDescription className="text-eaststreet-dark leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 mt-auto">
                  <div className="flex items-center justify-between text-sm text-eaststreet-dark border-t pt-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString('en-SG', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-eaststreet-darkest hover:text-eaststreet-dark font-medium mt-3"
                  >
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-eaststreet-darkest">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif text-white mb-4">
              Stay Updated on Singapore's M&A Market
            </h2>
            <p className="text-eaststreet-light text-lg mb-8">
              Get exclusive insights, market intelligence, and expert analysis delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-eaststreet-primary text-white px-8 py-3 rounded-md hover:bg-eaststreet-dark transition-colors duration-300 font-medium"
              >
                Subscribe to Updates
              </a>
              <a 
                href="/contact"
                className="border-2 border-eaststreet-light text-eaststreet-light px-8 py-3 rounded-md hover:bg-eaststreet-light hover:text-eaststreet-darkest transition-colors duration-300 font-medium"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;