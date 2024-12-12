"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Flame, Users, Clock, Zap, Briefcase, Target, GraduationCap, Rocket, Globe, Wallet, Palette, BarChart, Quote } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MainNav } from "@/components/main-nav"
import { AnimatedCounter } from "@/components/animated-counter"
import { CompanyCarousel } from "@/components/company-carousel"
import { FloatingJobs } from "@/components/floating-jobs"


export default function TalentoPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center pt-16 pb-12 lg:pt-24 lg:pb-16 bg-gradient-to-b from-blue-50 to-white">
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
                <span className="text-sm font-medium">Top 3% del Talento Tech en LATAM</span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Impulsa tu carrera en el{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">ecosistema tech</span>{' '}
                más innovador
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Únete a una comunidad exclusiva de profesionales tech y conecta con las startups más disruptivas de Latinoamérica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Aplicar Ahora
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  Explorar Oportunidades
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              {/* Placeholder for FloatingJobs component */}
              <FloatingJobs />  
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Profesionales Tech", value: 5000, suffix: "+" },
              { icon: Clock, label: "Tiempo Promedio de Contratación", value: 48, suffix: "h" },
              { icon: Zap, label: "Tasa de Éxito", value: 95, suffix: "%" },
              { icon: Briefcase, label: "Proyectos promedios por Joblyers", value: 3, prefix: "", suffix: "" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <AnimatedCounter from={0} to={stat.value} duration={2} />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Proceso Simple y Efectivo
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              4 pasos para unirte al top 3% del talento tech
            </h2>
            <p className="text-gray-600">
              Nuestro proceso está diseñado para identificar y potenciar a los mejores profesionales del sector tecnológico
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Aplica", description: "Completa tu perfil detallado y postula a las mejores startups tech", icon: Target },
              { number: "02", title: "Evaluación", description: "Participa en nuestro riguroso proceso de selección y evaluación de habilidades", icon: GraduationCap },
              { number: "03", title: "Match", description: "Te conectamos con startups que se alinean perfectamente con tus habilidades y objetivos", icon: Zap },
              { number: "04", title: "Despegue", description: "Comienza a trabajar en proyectos desafiantes y acelera tu crecimiento profesional", icon: Rocket }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200 rounded-bl-full opacity-50" />
                  <CardContent className="p-6 relative">
                    <div className="text-3xl font-bold text-blue-600 mb-4">
                      {step.number}
                    </div>
                    <step.icon className="w-8 h-8 text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Hubs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Especialidades Tech
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Hubs de Talento Especializados
            </h2>
            <p className="text-gray-600">
              Conectamos profesionales altamente especializados con las mejores oportunidades en startups innovadoras
            </p>
          </div>
          <Tabs defaultValue="desarrollo" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {[
                { title: "Desarrollo", icon: Briefcase, color: "text-blue-500" },
                { title: "Diseño", icon: Palette, color: "text-purple-500" },
                { title: "Data", icon: BarChart, color: "text-green-500" },
                { title: "Producto", icon: Briefcase, color: "text-orange-500" }
              ].map((hub) => (
                <TabsTrigger key={hub.title} value={hub.title.toLowerCase()}>
                  <hub.icon className={`w-5 h-5 mr-2 ${hub.color}`} />
                  {hub.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {[
              { 
                title: "Desarrollo", 
                icon: Briefcase, 
                color: "text-blue-500", 
                bgColor: "bg-blue-100",
                roles: ["Frontend", "Backend", "Full Stack", "Mobile", "DevOps"],
                skills: ["JavaScript", "React", "Node.js", "Python", "AWS"]
              },
              { 
                title: "Diseño", 
                icon: Palette, 
                color: "text-purple-500", 
                bgColor: "bg-purple-100",
                roles: ["UI/UX", "Product Design", "Brand", "Motion Graphics"],
                skills: ["Figma", "Adobe Creative Suite", "Sketch", "InVision"]
              },
              { 
                title: "Data", 
                icon: BarChart, 
                color: "text-green-500", 
                bgColor: "bg-green-100",
                roles: ["Data Science", "Data Engineering", "Business Intelligence", "Machine Learning"],
                skills: ["Python", "SQL", "Tableau", "TensorFlow", "Spark"]
              },
              { 
                title: "Producto", 
                icon: Briefcase, 
                color: "text-orange-500", 
                bgColor: "bg-orange-100",
                roles: ["Product Manager", "Product Owner", "Agile Coach", "Scrum Master"],
                skills: ["Agile", "Scrum", "Jira", "User Stories", "Roadmapping"]
              }
            ].map((hub) => (
              <TabsContent key={hub.title} value={hub.title.toLowerCase()}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-full ${hub.bgColor} ${hub.color} mr-4`}>
                        <hub.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold">{hub.title}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Roles Destacados</h4>
                        <ul className="space-y-2">
                          {hub.roles.map((role, index) => (
                            <li key={index} className="flex items-center">
                              <div className={`w-2 h-2 rounded-full ${hub.color} mr-2`} />
                              {role}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Habilidades Clave</h4>
                        <div className="flex flex-wrap gap-2">
                          {hub.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className={`${hub.bgColor} ${hub.color}`}>
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-blue-500 text-white">
              Historias de Éxito
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Lo que dicen nuestros Joblyers
            </h2>
            <p className="text-blue-100">
              Descubre cómo Jobly ha impulsado las carreras de profesionales tech como tú
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Florencia Hnatiuk",
                role: "Fullstack Developer",
                company: "Balcami",
                quote: "Lo que más me gusta de Jobly es la buena onda! Desde el primer día me sentí cómoda y acompañada. Además, siento que no solo importa lo que hago, sino también cómo me siento mientras tanto. Saber que tengo un equipo que me respalda y me entiende hace una gran diferencia.",
                image: "/images/ana-rodriguez.jpg"
              },
              {
                name: "Axel Joaquín Torletti",
                role: "Fullstack Developer",
                company: "Mentalgram, Aston & Zelaya",
                quote: "Lo que más valoro de formar parte de Jobly es lo acompañado que me sentí desde el inicio, la claridad y honestidad en todos los procesos, y la comunicación y seguimiento de principio a fin durante la propuesta laboral.",
                image: "/images/carlos-mendoza.jpg"
              },
              {
                name: "Amalia",
                role: "UX/UI Designer",
                company: "DesignCo",
                quote: "De Jobly quiero destacar el acompañamiento que he recibido a lo largo de todo el proceso laboral, desde la selección hasta finalizar el contrato, en todo momento hubo buena predisposición.",
                image: "/images/laura-gomez.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white text-gray-900 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="w-8 h-8 text-blue-500 mb-4" />
                    <p className="text-gray-600 mb-6 flex-grow">{testimonial.quote}</p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Ventajas Únicas
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Beneficios de ser parte del top 3%
            </h2>
            <p className="text-gray-600">
              Disfruta de ventajas exclusivas diseñadas para potenciar tu carrera y bienestar profesional
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Trabajo 100% Remoto", description: "Flexibilidad para trabajar desde cualquier lugar del mundo" },
              { icon: Wallet, title: "Salarios Competitivos", description: "Compensación acorde al mercado internacional tech" },
              { icon: Zap, title: "Proyectos Innovadores", description: "Trabaja en soluciones que impactan a millones de usuarios" },
              { icon: Users, title: "Networking de Elite", description: "Conéctate con profesionales top de la industria tech" },
              { icon: GraduationCap, title: "Aprendizaje Continuo", description: "Acceso a recursos de formación y desarrollo profesional" },
              { icon: Rocket, title: "Crecimiento Acelerado", description: "Oportunidades para crecer rápidamente en tu carrera" }
            ].map((benefit, index) => (
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

      {/* Company Showcase Section */}
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Preguntas Frecuentes
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Todo lo que necesitas saber sobre Jobly
            </h2>
            <p className="text-gray-600">
              Resolvemos tus dudas para que puedas enfocarte en impulsar tu carrera tech
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "¿Cómo funciona el proceso de aplicación en Jobly?",
                  answer: "El proceso comienza con la creación de tu perfil en nuestra plataforma. Luego, nuestro equipo revisa tu perfil y te conecta con oportunidades que se ajusten a tus habilidades y objetivos. Pasarás por un proceso de evaluación y, si hay un match, te presentaremos a la empresa para las entrevistas finales."
                },
                {
                  question: "¿Qué tipos de empresas trabajan con Jobly?",
                  answer: "Trabajamos principalmente con startups y empresas tech innovadoras en diversos sectores, desde fintech hasta healthtech. Nuestras empresas asociadas van desde startups en etapa temprana hasta scaleups en rápido crecimiento."
                },
                {
                  question: "¿Cuánto tiempo toma normalmente conseguir un trabajo a través de Jobly?",
                  answer: "El tiempo promedio para conseguir un trabajo a través de Jobly es de aproximadamente 2 a 4 semanas. Sin embargo, esto puede variar dependiendo de factores como tu perfil, las oportunidades disponibles y la rapidez con la que las empresas tomen decisiones."
                },
                {
                  question: "¿Qué beneficios ofrece Jobly a los profesionales tech?",
                  answer: "Jobly ofrece acceso a oportunidades exclusivas en startups innovadoras, salarios competitivos, trabajo remoto, networking con profesionales de alto nivel, desarrollo profesional continuo y un proceso de contratación simplificado y transparente."
                },
                {
                  question: "¿Cómo se asegura Jobly de la calidad de las empresas y oportunidades?",
                  answer: "Realizamos un riguroso proceso de selección para las empresas que se unen a nuestra plataforma. Evaluamos su cultura, potencial de crecimiento, estabilidad financiera y las oportunidades de desarrollo que ofrecen a los profesionales. Además, mantenemos una comunicación constante con nuestros Joblyers para asegurar que las experiencias sean positivas."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ¿Listo para llevar tu carrera tech al siguiente nivel?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Únete a Jobly hoy y conecta con las startups más innovadoras de Latinoamérica. Tu próxima gran oportunidad te está esperando.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Comienza tu viaje con Jobly
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

