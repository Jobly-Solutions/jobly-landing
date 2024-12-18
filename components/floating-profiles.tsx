"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Image from "next/image"; // Importa el componente Image
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const profiles = [
  {
    id: 1,
    name: "Germán J.",
    role: "Fullstack Developer",
    skills: ["Python", "React", "MongoDB"],
    color: "bg-blue-500",
    image: "/images/german.jpeg",
  },
  {
    id: 2,
    name: "Valentina O.",
    role: "Diseñadora UX/UI",
    skills: ["UX/UI Design", "Figma"],
    color: "bg-blue-500",
    image: "/images/valentina.jpeg",
  },
  {
    id: 3,
    name: "Sofia B.",
    role: "Experta en Integraciones",
    skills: ["API", "Node.js", "AWS"],
    color: "bg-blue-500",
    image: "/images/sofia.jpeg",
  },
  {
    id: 4,
    name: "Carlos M.",
    role: "Data Scientist",
    skills: ["Python", "Machine Learning", "SQL"],
    color: "bg-blue-500",
    image: "/images/carlos.jpeg",
  },
];

export function FloatingProfiles() {
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);

  const handleAddToTeam = (id: number) => {
    setSelectedProfile(id);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl mx-auto">
      {profiles.map((profile, index) => (
        <motion.div
          key={profile.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="flex items-start gap-4"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {/* Cambié <img> por <Image> */}
            <div className="w-16 h-16 relative rounded-full overflow-hidden border border-gray-300">
              <Image
                src={profile.image}
                alt={profile.name}
                layout="fill"
                objectFit="cover" // Mantiene las proporciones
                priority={index < 2} // Optimiza las primeras imágenes
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{profile.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{profile.role}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {profile.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-2 py-0.5 text-xs font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <Button
                onClick={() => handleAddToTeam(profile.id)}
                disabled={selectedProfile === profile.id}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                {selectedProfile === profile.id
                  ? "Agregado al equipo"
                  : "Agregar a mi equipo"}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
