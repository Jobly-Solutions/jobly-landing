import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ 
  badge, 
  title, 
  description, 
  className = "",
  align = 'center' 
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "max-w-3xl mb-16",
        align === 'center' ? 'text-center mx-auto' : '',
        className
      )}
    >
      {badge && (
        <Badge variant="secondary" className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      {description && (
        <p className="text-xl text-gray-600">{description}</p>
      )}
    </motion.div>
  )
}

