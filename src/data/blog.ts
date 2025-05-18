export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt:
      'Learn how to build modern web applications with Next.js and React. This guide covers the basics and advanced features.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    title: 'Mastering TypeScript in 2024',
    excerpt:
      'Dive deep into TypeScript features and best practices. Learn how to write more maintainable and type-safe code.',
    date: 'March 18, 2024',
    readTime: '8 min read',
    category: 'Programming',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    title: 'The Future of AI in Web Development',
    excerpt:
      'Explore how artificial intelligence is revolutionizing web development and what it means for developers.',
    date: 'March 20, 2024',
    readTime: '6 min read',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
  },
]; 