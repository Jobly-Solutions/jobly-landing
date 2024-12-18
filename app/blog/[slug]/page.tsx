"use client"
//fix!
import React from 'react'
import { useParams } from 'next/navigation'
import { Calendar, Clock, User, Tag } from 'lucide-react'
import { MainNav } from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"
import { RelatedPosts } from "@/components/blog/related-posts"
import { BlogCTA } from "@/components/blog/blog-cta"
import { ShareButtons } from "@/components/blog/share-buttons"
import blogPostsData from '@/data/blog-posts.json'

export default function BlogPostPage() {
  const params = useParams()
  const { slug } = params

  const blogPost = blogPostsData.posts.find(post => post.slug === slug)

  if (!blogPost) {
    return <div>Post no encontrado</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      
      <main className="container mx-auto px-4 py-8">
       

        <article className="bg-white shadow-lg rounded-lg overflow-hidden">
         
          
          <div className="p-6 md:p-8">
            <Badge className="mb-4">{blogPost.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{blogPost.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-600 mb-6">
              <span className="flex items-center mr-4 mb-2">
                <User className="mr-2 h-4 w-4" />
                {blogPost.author}
              </span>
              <span className="flex items-center mr-4 mb-2">
                <Calendar className="mr-2 h-4 w-4" />
                {new Date(blogPost.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center mb-2">
                <Clock className="mr-2 h-4 w-4" />
                {blogPost.readTime} de lectura
              </span>
            </div>

            <div 
              className="prose max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            <div className="flex flex-wrap gap-2 mb-6">
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>

            <ShareButtons title={blogPost.title} />
          </div>
        </article>

        <RelatedPosts currentPostSlug={slug as string} />
        <BlogCTA />
      </main>
    </div>
  )
}

