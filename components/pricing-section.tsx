import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"

const plans = [
  {
    name: "Básico",
    price: 999,
    description: "Perfecto para startups en etapa inicial",
    features: [
      "Acceso a 1 profesional",
      "Soporte por email",
      "Duración: 1 mes"
    ]
  },
  {
    name: "Pro",
    price: 2499,
    description: "Ideal para empresas en crecimiento",
    features: [
      "Acceso a 3 profesionales",
      "Soporte prioritario",
      "Duración: 3 meses",
      "Garantía de reemplazo"
    ]
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para grandes equipos y proyectos complejos",
    features: [
      "Acceso ilimitado a profesionales",
      "Gerente de cuenta dedicado",
      "Duración personalizada",
      "Integraciones personalizadas"
    ]
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Planes Flexibles"
          title="Planes de Precios"
          description="Encuentra el plan perfecto para tu empresa"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`border-2 ${index === 1 ? 'border-blue-400 shadow-lg' : 'border-gray-200'}`}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-4">
                    {plan.price === "Personalizado" ? plan.price : `$${plan.price}`}
                    {plan.price !== "Personalizado" && <span className="text-lg font-normal text-gray-600">/mes</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${index === 1 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'} text-white`}>
                    Seleccionar Plan
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

