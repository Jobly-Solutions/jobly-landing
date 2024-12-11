import React from 'react'
import { motion } from 'framer-motion'
import { Users, Clock, Zap } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"

const benefits = [
  {
    icon: Users,
    title: "Talento Validado",
    description: "Accede a más de 5,000 profesionales verificados en diferentes áreas tecnológicas."
  },
  {
    icon: Clock,
    title: "Tiempo Récord",
    description: "Incorpora talento en cuestión de días, no semanas o meses."
  },
  {
    icon: Zap,
    title: "Menor Costo",
    description: "Optimiza tus recursos con nuestro modelo de contratación flexible."
  }
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="¿Por qué elegirnos?"
          title="La mejor forma de incorporar talento tech"
          description="Descubre cómo Jobly puede ayudarte a encontrar el talento perfecto para tu empresa"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

