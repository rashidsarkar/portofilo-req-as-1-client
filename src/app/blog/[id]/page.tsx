"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          `https://server-dashbord.vercel.app/api/blog/${params.id}`
        );
        const data = await response.json();
        if (data.success) {
          setPost(data.data);
        } else {
          setPost(null);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="mb-4 text-4xl font-bold">Post Not Found</h1>
        <Link href="/blog">
          <Button className="text-black bg-primary hover:bg-primary/90">
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container px-4 py-16 mx-auto">
        <article className="max-w-4xl mx-auto overflow-hidden bg-white shadow-lg rounded-xl">
          <div className="relative w-full h-96">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="p-8">
            <h1 className="mb-6 text-4xl font-bold">{post.title}</h1>
            <p className="mb-8 text-lg text-gray-600">{post.excerpt}</p>

            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <Link href="/blog">
                <Button className="text-black bg-primary hover:bg-primary/90">
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
