'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { formatDate } from 'app/blog/utils';

interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
  };
}

export function BlogPosts() {
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchBlogPosts() {
      const response = await fetch('/api/blog-posts');
      const posts: BlogPost[] = await response.json();
      setAllBlogs(posts);
    }
    fetchBlogPosts();
  }, []);

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
