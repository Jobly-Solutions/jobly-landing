import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">¿Listo para potenciar tu equipo?</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Únete a cientos de empresas que ya confían en Jobly para escalar sus equipos de manera eficiente.
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
          Incorporar Talento
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>
  )
}

