"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Check  } from 'lucide-react'
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"

const steps = [
  {
    title: "Define tus necesidades",
    description: "Describe el perfil que necesitas y tus requerimientos específicos.",
    icon: "1"
  },
  {
    title: "Recibe propuestas",
    description: "Nuestro equipo te presenta los mejores candidatos en 48 horas.",
    icon: "2"
  },
  {
    title: "Comienza a trabajar",
    description: "Selecciona al mejor y comienza tu proyecto de inmediato.",
    icon: "3"
  }
]

export function TimelineSection() {
  return (
    <section className="py-24 bg-gray-50">
      
      <div className="container mx-auto px-4">
          <SectionHeader
            badge="Proceso Simple"
            title="Cómo funciona"
            description="Un proceso simple y eficiente para incorporar talento"
          />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
          </motion.div>

          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Content */}
                <div className={cn(
                  "flex-1 text-center md:text-left",
                  index % 2 === 1 && "md:text-right"
                )}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                </div>

                {/* Circle and number */}
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.4 + index * 0.1 
                    }}
                    className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg"
                  >
                    {step.icon}
                  </motion.div>
                  
                  {/* Connecting line for mobile */}
                  {index !== steps.length - 1 && (
                    <div className="md:hidden absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent" />
                  )}
                </div>

                {/* Empty div for layout in desktop */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>

          {/* Final check mark */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.8 
            }}
            className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mt-8"
          >
            <Check className="w-8 h-8 text-white" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

