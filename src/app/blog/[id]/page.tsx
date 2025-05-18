import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    content: `
      Next.js has revolutionized the way we build React applications. In this comprehensive guide, we'll explore the core concepts and features that make Next.js a powerful framework for modern web development.

      ## Why Next.js?

      Next.js provides an excellent developer experience with features like:
      - Server-side rendering
      - Static site generation
      - API routes
      - File-based routing
      - Built-in CSS support

      ## Getting Started

      To create a new Next.js project, run:
      \`\`\`bash
      npx create-next-app@latest my-app
      \`\`\`

      ## Key Features

      1. **Server-Side Rendering**
         Next.js enables server-side rendering out of the box, improving performance and SEO.

      2. **Static Site Generation**
         Generate static pages at build time for even better performance.

      3. **API Routes**
         Create API endpoints as part of your Next.js application.

      ## Best Practices

      - Use the App Router for new projects
      - Implement proper error handling
      - Optimize images using next/image
      - Leverage TypeScript for better type safety
    `,
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60',
    },
  },
  {
    id: 2,
    title: 'Mastering TypeScript in 2024',
    content: `
      TypeScript has become an essential tool in modern web development. Let's explore how to leverage its features effectively.

      ## Why TypeScript?

      TypeScript adds static typing to JavaScript, providing:
      - Better code completion
      - Catch errors early
      - Improved maintainability
      - Better documentation

      ## Advanced Features

      1. **Generics**
         Create reusable components with type safety.

      2. **Type Inference**
         Let TypeScript automatically determine types.

      3. **Utility Types**
         Use built-in utility types for common operations.

      ## Best Practices

      - Use strict mode
      - Leverage type inference
      - Create custom type definitions
      - Use interfaces for object shapes
    `,
    date: 'March 18, 2024',
    readTime: '8 min read',
    category: 'Programming',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60',
    author: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60',
    },
  },
  {
    id: 3,
    title: 'The Future of AI in Web Development',
    content: `
      Artificial Intelligence is transforming web development in unprecedented ways. Let's explore the current trends and future possibilities.

      ## AI in Web Development

      AI is revolutionizing web development through:
      - Automated code generation
      - Smart debugging
      - Performance optimization
      - User experience enhancement

      ## Current Applications

      1. **Code Generation**
         AI tools can generate code based on natural language descriptions.

      2. **Testing Automation**
         AI-powered testing tools can identify potential issues.

      3. **Performance Optimization**
         AI algorithms can optimize website performance automatically.

      ## Future Trends

      - More sophisticated code generation
      - Enhanced security through AI
      - Improved user experience personalization
      - Automated maintenance and updates
    `,
    date: 'March 20, 2024',
    readTime: '6 min read',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    author: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60',
    },
  },
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <Link href="/blog">
          <Button className="mb-8 text-black">
            ← Back to Blog
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-[400px] w-full">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-sm font-medium text-white bg-primary/80 rounded-full">
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center mb-6">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-medium text-gray-900">{post.author.name}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="flex items-center mr-4">
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
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 