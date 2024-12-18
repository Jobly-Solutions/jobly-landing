"use client"

import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import { ArrowRight, Flame, Zap, Users, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
import blogPostsData from "@/data/blog-posts.json"


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
                
              <a href="#pricing" rel="noopener noreferrer">
                
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Incorporar Talento
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                </a>
              <a href="https://calendar.app.google/oo8ULpzbejJBvv987" target="_blank" rel="noopener noreferrer">

                <Button size="lg" variant="outline" className="group">
                  Agendar Demo
                  <Zap className="ml-2 w-4 h-4 transition-transform group-hover:rotate-12" />
                </Button>
               </a>
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
          <h2 className="text-3xl font-bold text-center mb-16">Startups que usan Jobly</h2>
          <CompanyCarousel />
        </div>
      </section>

      <BenefitsSection />
      
      <TimelineSection />
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Lo que dicen los founders"
            description="Historias de éxito de startups que ya confían en Jobly"
            className="text-white [&>p]:text-blue-100"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Gonzalo Waisman",
                role: "CEO, Hashi",
                quote:
                  "Jobly nos ayudó a encontrar el talento perfecto para impulsar nuestro crecimiento.",
                image: "https://media.licdn.com/dms/image/v2/D4E03AQHIZYiXsEvuOA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731698850547?e=1738800000&v=beta&t=2i-e578IDTD9P_mWdkyYbGqUslcMg9If3V0r7keWrmI",
              },
              {
                name: "Sebastian Rinaldi",
                role: "CEO, ChatsappAI",
                quote:
                  "La calidad de los profesionales de Jobly es excepcional. Han transformado nuestro equipo.",
                image: "https://media.licdn.com/dms/image/v2/D4D03AQH6NtNLb2gy1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718836469881?e=1738800000&v=beta&t=pVPoJh6uyHNr3IVNK1fhxGHFmNEBT-rRve-J4J6Bz9U",
              },
              {
                name: "Agustina Wende",
                role: "CEO, Mentalgram",
                quote:
                  "La agilidad y calidad de Jobly son incomparables. Ahora nuestro equipo está completo.",
                image: "https://media.licdn.com/dms/image/v2/D4D03AQE2IJmW9_6NVg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714047473483?e=1738800000&v=beta&t=XiWrKvgC3W1yt3yhlhxF8ve-8FRqssy5nLK88AjVPBY",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white text-gray-900 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-grow">
                      <svg
                        className="w-8 h-8 text-blue-600 mb-4"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      {testimonial.image ? (
                         <Image
                         src={testimonial.image}
                         alt={`Foto de ${testimonial.name}`}
                         width={48}
                         height={48}
                         className="rounded-full object-cover"
                       />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-xl font-bold text-blue-600">
                            {testimonial.name[0]}
                          </span>
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <SectionHeader
        badge="Planes Flexibles"
        title="Planes de Precios"
        description="Encuentra el plan perfecto para tu startup "
      />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Starter",
            description: "Perfecto para startups en etapa inicial",
           // price: "$599/mes",
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
            //price: "$999/mes",
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
            price: "Personalizado",
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



  <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recursos para Startups</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPostsData.posts.slice(0, 3).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} passHref>
                      <Button variant="outline" className="w-full">
                        Leer más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Soporte"
            title="Preguntas Frecuentes"
            description="Encuentra respuestas a las preguntas más comunes"
          />
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {[
              {
                question: "¿Cómo funciona el proceso de contratación?",
                answer: "Definimos tus necesidades, te presentamos candidatos en 48 horas, y tú eliges al mejor. Simple y rápido."
              },
              {
                question: "¿Qué tipo de talento puedo encontrar en Jobly?",
                answer: "Ofrecemos una amplia gama de profesionales tech, desde desarrolladores hasta diseñadores UX/UI y data scientists."
              },
              {
                question: "¿Cuánto tiempo toma incorporar a un nuevo miembro del equipo?",
                answer: "Con Jobly, puedes tener un nuevo miembro en tu equipo en cuestión de días, no semanas o meses."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
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

