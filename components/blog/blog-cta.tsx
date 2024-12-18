import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function BlogCTA() {
  return (
    <section className="bg-blue-600 text-white rounded-lg p-8 my-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para revolucionar tu equipo tech?</h2>
        <p className="text-xl mb-6">
          Descubre cómo Jobly puede ayudarte a encontrar el talento perfecto para tu startup.
        </p>
        <Button size="lg" variant="secondary">
          Comienza ahora
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

