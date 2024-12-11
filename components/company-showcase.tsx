import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { CompanyCarousel } from "@/components/company-carousel"

export function CompanyShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Empresas Innovadoras
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            Trabaja con las startups más disruptivas
          </h2>
          <p className="text-gray-600">
            Conectamos talento excepcional con empresas que están redefiniendo industrias y creando el futuro
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CompanyCarousel />
        </motion.div>
      </div>
    </section>
  )
}

