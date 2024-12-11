import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Wallet, Zap, Users, GraduationCap, Rocket } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const benefits = [
  {
    icon: Globe,
    title: "Trabajo 100% Remoto",
    description: "Flexibilidad para trabajar desde cualquier lugar del mundo"
  },
  {
    icon: Wallet,
    title: "Salarios Competitivos",
    description: "Compensación acorde al mercado internacional tech"
  },
  {
    icon: Zap,
    title: "Proyectos Innovadores",
    description: "Trabaja en soluciones que impactan a millones de usuarios"
  },
  {
    icon: Users,
    title: "Networking de Elite",
    description: "Conéctate con profesionales top de la industria tech"
  },
  {
    icon: GraduationCap,
    title: "Aprendizaje Continuo",
    description: "Acceso a recursos de formación y desarrollo profesional"
  },
  {
    icon: Rocket,
    title: "Crecimiento Acelerado",
    description: "Oportunidades para crecer rápidamente en tu carrera"
  }
]

export function BenefitsGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Ventajas Únicas
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            Beneficios de ser parte del top 10%
          </h2>
          <p className="text-gray-600">
            Disfruta de ventajas exclusivas diseñadas para potenciar tu carrera y bienestar profesional
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <benefit.icon className="w-8 h-8 text-blue-600 mb-4" />
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

