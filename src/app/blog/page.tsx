"use client";

import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { blogPosts, BlogPost } from '@/data/blog';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div
          data-aos="fade-up"
        >
          <h1 className="text-5xl font-bold text-center mb-4 bg-clip-text text-black">
            Blog Posts
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our latest articles on web development, programming, and technology trends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post: BlogPost, index: number) => (
            <article
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div 
                  data-aos="zoom-in"
                  data-aos-delay={200 + index * 100}
                  className="absolute top-4 left-4"
                >
                  <span className="px-3 py-1 text-sm font-medium text-white bg-primary/80 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 group">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-gray-800 group-hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>
                
                <Link href={`/blog/${post.id}`}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black transition-colors">
                    Read More →
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 