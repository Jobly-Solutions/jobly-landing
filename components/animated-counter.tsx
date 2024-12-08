"use client"

import React from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

interface AnimatedCounterProps {
  from: number
  to: number
  duration: number
}

export function AnimatedCounter({ from, to, duration }: AnimatedCounterProps) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  React.useEffect(() => {
    const animation = animate(count, to, { duration })

    return animation.stop
  }, [count, to, duration])

  return (
    <motion.span className="text-4xl font-bold text-blue-600">
      {rounded}
    </motion.span>
  )
}

