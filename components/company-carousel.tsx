"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const companies = [
  { name: "Mentalgram", src: "/images/mentalgram.png" },
  { name: "Hashi", src: "/images/hashi.png" },  
  { name: "ChatsappAI", src: "/images/chatsapp.png" },
  { name: "Neuralgenius", src: "/images/neuralgenius.png" },
  { name: "Koi", src: "/images/koi.png" },
  { name: "Aston", src: "/images/aston.png" },
  { name: "balcami", src: "/images/balcami.png" },
  { name: "zelaya", src: "/images/zelaya.png" },
  { name: "Trackio", src: "/images/trackio.png" }
]

export function CompanyCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 90,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 4, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 25 },
      },
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {companies.map((company, index) => (
        <motion.div
          key={company.name}
          className="keen-slider__slide flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Image
            src={company.src}
            alt={`Logo de ${company.name}`}
            width={160}
            height={50}
            className="w-auto h-12 opacity-40 hover:opacity-100 transition-opacity"
          />
        </motion.div>
      ))}
    </div>
  )
}

