"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "benefits", label: "Beneficios" },
  { id: "how-it-works", label: "Cómo funciona" },
  { id: "testimonials", label: "Testimonios" },
  { id: "pricing", label: "Precios" },
  { id: "faq", label: "FAQ" }
]

export function SectionNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:block"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <ul className="space-y-4">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="group flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span
                className={cn(
                  "block w-2 h-2 rounded-full transition-all duration-300",
                  activeSection === id 
                    ? "bg-blue-600 scale-125" 
                    : "bg-gray-300 group-hover:bg-blue-400"
                )}
              />
              <span
                className={cn(
                  "text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity",
                  activeSection === id ? "text-blue-600" : "text-gray-600"
                )}
              >
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

