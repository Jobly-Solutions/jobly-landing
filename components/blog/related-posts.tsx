import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import blogPostsData from '@/data/blog-posts.json'

export function RelatedPosts({ currentPostSlug }: { currentPostSlug: string }) {
  const relatedPosts = blogPostsData.posts.filter(post => post.slug !== currentPostSlug).slice(0, 2)

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {relatedPosts.map((post) => (
          <Card key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  )
}

