import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"

const testimonials = [
  {
    name: "Ana Rodríguez",
    role: "CEO, TechStart",
    quote: "Jobly nos ayudó a encontrar el talento perfecto para impulsar nuestro crecimiento.",
    image: "/images/ana.jpg"
  },
  {
    name: "Carlos Mendoza",
    role: "CTO, DataViz",
    quote: "La calidad de los profesionales de Jobly es excepcional. Han transformado nuestro equipo.",
    image: "/images/carlos.jpg"
  },
  {
    name: "Laura Gómez",
    role: "Desarrolladora Full Stack",
    quote: "Gracias a Jobly, encontré oportunidades emocionantes en startups innovadoras.",
    image: "/images/laura.jpg"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Lo que dicen nuestros clientes"
          description="Historias de éxito de empresas que ya confían en Jobly"
          className="text-white [&>p]:text-blue-100"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white text-gray-900 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-grow">
                    <Image
                      src={testimonial.image}
                      alt={`Foto de ${testimonial.name}`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

