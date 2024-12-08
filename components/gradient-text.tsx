import React from 'react'

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  )
}

