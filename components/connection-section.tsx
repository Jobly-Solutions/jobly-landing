"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, Zap, ArrowRight, Briefcase, Code, Palette } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Building2,
    title: "Empresas",
    items: ["Startups", "Scaleups", "Tech Companies"],
    color: "bg-blue-500"
  },
  {
    icon: Code,
    title: "Desarrolladores",
    items: ["Frontend", "Backend", "Full Stack"],
    color: "bg-purple-500"
  },
  {
    icon: Palette,
    title: "Diseñadores",
    items: ["UI/UX", "Product", "Brand"],
    color: "bg-pink-500"
  }
]

export function ConnectionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Plataforma Integral
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Conectando{' '}
              <span className="text-blue-600">Empresas</span>{' '}
              con{' '}
              <span className="text-blue-600">Talento</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Una plataforma diseñada para hacer el match perfecto entre empresas innovadoras y talento excepcional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${feature.color} opacity-10 -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
                    <div className={`inline-flex p-3 rounded-xl ${feature.color} bg-opacity-10 mb-4`}>
                      <feature.icon className={`w-6 h-6 ${feature.color} text-white`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <ul className="space-y-2">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <Zap className="w-4 h-4 mr-2 text-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Simplificamos el proceso de contratación
              </h3>
              <p className="text-blue-100 mb-8">
                Nuestro enfoque innovador facilita una colaboración fluida entre las empresas y el talento, 
                asegurando una integración sin problemas y un aumento inmediato en la productividad.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="group">
                  Conoce el proceso
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                  Ver demo
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Users, label: "Perfiles verificados", value: "100%" },
              { icon: Zap, label: "Tiempo promedio", value: "48h" },
              { icon: Building2, label: "Empresas activas", value: "500+" },
              { icon: Briefcase, label: "Contrataciones", value: "1000+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

