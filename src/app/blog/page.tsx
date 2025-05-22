"use client";

import Link from "next/link";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

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
        const response = await fetch(
          "https://server-dashbord.vercel.app/api/blog"
        );
        const data = await response.json();
        setBlogPosts(data.data); // The JSON is already an array, no need for .posts
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);
  // console.log(blogPosts.data);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container px-4 py-16 mx-auto">
        <div data-aos="fade-up">
          <h1 className="mb-4 text-5xl font-bold text-center text-black bg-clip-text">
            Blog Posts
          </h1>
          <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
            Explore our latest articles on web development, programming, and
            technology trends.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts?.map((post: BlogPost, index: number) => (
            <article
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="overflow-hidden bg-white shadow-lg rounded-xl"
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h2 className="mb-3 text-2xl font-semibold group">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-gray-800 transition-colors group-hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mb-4 text-gray-600 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link href={`/blog/${post.id}`}>
                  <Button className="w-full text-black transition-colors bg-primary hover:bg-primary/90">
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
