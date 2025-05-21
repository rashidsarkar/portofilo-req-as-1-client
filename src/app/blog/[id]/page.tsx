"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  content: string;
}

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch('/data/blogData.json');
        const data = await response.json();
        const foundPost = data.find((p: BlogPost) => p.id === Number(params.id));
        setPost(foundPost || null);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog">
          <Button className="bg-primary hover:bg-primary/90 text-black">
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <p className="text-gray-600 mb-8 text-lg">{post.excerpt}</p>
            
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <Link href="/blog">
                <Button className="bg-primary hover:bg-primary/90 text-black">
                  ← Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 