"use client";

import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { useEffect, useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  content: string;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/data/blogData.json');
        const data = await response.json();
        setBlogPosts(data); // The JSON is already an array, no need for .posts
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

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