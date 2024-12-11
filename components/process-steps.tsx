import React from 'react'
import { motion } from 'framer-motion'
import { Target, GraduationCap, Zap, Rocket, ArrowRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const processSteps = [
  {
    number: "01",
    title: "Aplica",
    description: "Completa tu perfil detallado y postula a las mejores startups tech",
    icon: Target
  },
  {
    number: "02",
    title: "Evaluación",
    description: "Participa en nuestro riguroso proceso de selección y evaluación de habilidades",
    icon: GraduationCap
  },
  {
    number: "03",
    title: "Match",
    description: "Te conectamos con startups que se alinean perfectamente con tus habilidades y objetivos",
    icon: Zap
  },
  {
    number: "04",
    title: "Despegue",
    description: "Comienza a trabajar en proyectos desafiantes y acelera tu crecimiento profesional",
    icon: Rocket
  }
]

export function ProcessSteps() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Proceso Simple y Efectivo
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            4 pasos para unirte al top 10% del talento tech
          </h2>
          <p className="text-gray-600">
            Nuestro proceso está diseñado para identificar y potenciar a los mejores profesionales del sector tecnológico
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="h-full hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    {step.number}
                  </div>
                  <step.icon className="w-8 h-8 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

