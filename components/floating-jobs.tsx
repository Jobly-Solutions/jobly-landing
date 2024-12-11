"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase } from 'lucide-react'

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechStart",
    letter: "T",
    letterBg: "bg-blue-600",
    skills: ["React", "TypeScript", "Next.js"],
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "DesignCo",
    letter: "D",
    letterBg: "bg-purple-600",
    skills: ["Figma", "User Research"],
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "CloudTech",
    letter: "C",
    letterBg: "bg-green-600",
    skills: ["Node.js", "Python"],
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataViz",
    letter: "D",
    letterBg: "bg-red-600",
    skills: ["Python", "ML", "SQL"],
  }
]

export function FloatingJobs() {
  const [appliedJobs, setAppliedJobs] = useState<number[]>([])

  const handleApply = (id: number) => {
    if (!appliedJobs.includes(id)) {
      setAppliedJobs([...appliedJobs, id])
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }
  }

  return (
    <div className="relative w-full h-[640px]">
      {jobs.map((job, index) => (
        <motion.div
          key={job.id}
          className="absolute"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            x: `${(index % 2) * 340}px`,
            top: `${Math.floor(index / 2) * 260}px`
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            y: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        >
          <div className="bg-white rounded-lg shadow-md p-7 w-[320px]">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 rounded-lg ${job.letterBg} flex items-center justify-center text-white font-medium text-xl`}>
                {job.letter}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                <div className="flex items-center gap-2 text-base text-gray-500">
                  <Briefcase className="w-4 h-4" />
                  {job.company}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {job.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-blue-50 text-blue-600 hover:bg-blue-100"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            <Button
              onClick={() => handleApply(job.id)}
              disabled={appliedJobs.includes(job.id)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {appliedJobs.includes(job.id) ? "Aplicación Enviada" : "Aplicar Ahora"}
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

