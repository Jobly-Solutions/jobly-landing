"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Flame, Zap, Users, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/animated-counter"
import { GradientText } from "@/components/gradient-text"
import { SectionNav } from "@/components/section-nav"
import { SectionHeader } from "@/components/section-header"
import { TimelineSection } from "@/components/timeline-section"
import { CompanyCarousel } from "@/components/company-carousel"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { MainNav } from "@/components/main-nav"
import { FloatingProfiles } from "@/components/floating-profiles"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Card, CardContent } from "@/components/ui/card"; // Import Card and CardContent
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="relative">
      <MainNav />
      <SectionNav />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div 
              className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Flame className="w-4 h-4" />
                <span className="text-sm font-medium">Jobly es la solución ideal para ti</span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Potencia tu Startup incorporando{' '}
                <GradientText>Joblyers</GradientText>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Talento tecnológico validado on-demand, en tiempo récord y a un menor costo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Incorporar Talento
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  Ver Demo
                  <Zap className="ml-2 w-4 h-4 transition-transform group-hover:rotate-12" />
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 max-w-xl mx-auto lg:mx-0">
                <StatsCard icon={Users} label="Profesionales" value={5000} />
                <StatsCard icon={Clock} label="Startups" value={100} />
                <StatsCard icon={Zap} label="% Satisfacción" value={98} suffix="%" />
              </div>
            </motion.div>
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <FloatingProfiles />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50/80 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Empresas que confían en nosotros</h2>
          <CompanyCarousel />
        </div>
      </section>

      <BenefitsSection />
      
      <TimelineSection />
      
      <TestimonialsSection />
      
      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Planes Flexibles"
            title="Planes de Precios"
            description="Encuentra el plan perfecto para tu startup"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                description: "Perfecto para startups en etapa inicial",
                features: [
                  "Hasta 1 candidato técnico especializado",
                  "Gestión completa de pagos, contratos y recursos humanos",
                  "Soporte en la integración del candidato",
                  "Cancelación en cualquier momento"
                ]
              },
              {
                name: "Plus",
                description: "Ideal para startups en crecimiento",
                features: [
                  "Hasta 2 candidatos técnicos especializados",
                  "Todas las características del Starter Plan",
                  "Soporte durante el primer mes para la adaptación del equipo",
                  "Reportes de rendimiento y seguimiento continuo",
                  "Cancelación en cualquier momento"
                ]
              },
              {
                name: "Business",
                description: "Para startups con equipos y proyectos complejos",
                features: [
                  "Desde 3 candidatos técnicos especializados",
                  "Todas las características del Plus Plan",
                  "Proceso de selección avanzado con pruebas personalizadas",
                  "Seguimiento y reportes continuos",
                  "Soporte continuo para asegurar la integración fluida del equipo",
                  "Cancelación en cualquier momento"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`border-2 ${index === 1 ? 'border-blue-400 shadow-lg' : 'border-gray-200'}`}>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="https://calendar.app.google/oo8ULpzbejJBvv987" target="_blank" rel="noopener noreferrer">
                      <Button
                        className={`w-full ${
                          index === 1 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'
                        } text-white`}
                      >
                        Seleccionar Plan
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  )
}

interface StatsCardProps {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix?: string;
}

function StatsCard({ icon: Icon, label, value, suffix = "" }: StatsCardProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-2">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
      <AnimatedCounter from={0} to={value} duration={2} />
      {suffix && <span className="text-2xl font-bold text-blue-600">{suffix}</span>}
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  )
}

