"use client"

import React from 'react'
import Image from "next/image"
// import Link from "next/link"
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"

const featuredPost = {
  title: "Cómo construir un equipo tech remoto efectivo",
  excerpt: "Descubre las mejores prácticas para formar y gestionar equipos tecnológicos distribuidos que sean productivos y estén comprometidos.",
  author: "María González",
  date: "Mar 15, 2024",
  readTime: "8 min",
  image: "/images/featured-post.jpg",
  category: "Gestión de Equipos"
}

const posts = [
  {
    title: "10 tendencias tech que definirán el 2024",
    excerpt: "Análisis de las tecnologías emergentes que están transformando la industria.",
    author: "Carlos Ruiz",
    date: "Mar 12, 2024",
    readTime: "6 min",
    image: "/images/post-1.jpg",
    category: "Tendencias"
  },
  {
    title: "Guía de salarios tech en Latinoamérica",
    excerpt: "Un análisis detallado de las compensaciones en el sector tecnológico.",
    author: "Ana Martínez",
    date: "Mar 10, 2024",
    readTime: "10 min",
    image: "/images/post-2.jpg",
    category: "Mercado Laboral"
  },
  {
    title: "Cultura startup: más allá del ping pong",
    excerpt: "Cómo construir una cultura organizacional que realmente importe.",
    author: "Diego López",
    date: "Mar 8, 2024",
    readTime: "7 min",
    image: "/images/post-3.jpg",
    category: "Cultura"
  },
  {
    title: "De developer a CTO: una guía práctica",
    excerpt: "Consejos prácticos para avanzar en tu carrera tecnológica.",
    author: "Laura Sánchez",
    date: "Mar 5, 2024",
    readTime: "12 min",
    image: "/images/post-4.jpg",
    category: "Desarrollo Profesional"
  },
  {
    title: "El arte de las entrevistas técnicas",
    excerpt: "Cómo prepararte y destacar en los procesos de selección tech.",
    author: "Pedro Ramírez",
    date: "Mar 3, 2024",
    readTime: "9 min",
    image: "/images/post-5.jpg",
    category: "Entrevistas"
  },
  {
    title: "Construyendo productos tech escalables",
    excerpt: "Estrategias para desarrollar soluciones que crezcan con tu negocio.",
    author: "Sofia Torres",
    date: "Mar 1, 2024",
    readTime: "8 min",
    image: "/images/post-6.jpg",
    category: "Desarrollo"
  }
]

const categories = [
  "Todas",
  "Tendencias",
  "Desarrollo Profesional",
  "Cultura",
  "Gestión de Equipos",
  "Mercado Laboral",
  "Entrevistas",
  "Desarrollo"
]

export default function BlogPage() {
  return (
    <div className="relative">
      <MainNav />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Recursos y Conocimiento
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog de Jobly
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Insights, tendencias y consejos para profesionales y startups tech
            </p>
            <div className="flex max-w-md mx-auto">
              <Input 
                placeholder="Buscar artículos..." 
                className="rounded-r-none"
              />
              <Button className="rounded-l-none">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex gap-4 min-w-max justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <h2 className="text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button>
                    Leer Artículo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="p-6">
                      <Badge className="mb-4">{post.category}</Badge>
                      <h3 className="text-xl font-semibold mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Leer Artículo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Cargar Más Artículos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Suscríbete a nuestro newsletter
            </h2>
            <p className="text-blue-100 mb-8">
              Recibe los mejores artículos y recursos directamente en tu inbox
            </p>
            <div className="flex max-w-md mx-auto">
              <Input 
                placeholder="Tu email..." 
                className="rounded-r-none bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="rounded-l-none bg-white text-blue-600 hover:bg-blue-50">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

