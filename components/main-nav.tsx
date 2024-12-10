"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

const navItems = [
  { href: "/", label: "Inicio" },
  //{ href: "/pymes", label: "Pymes" },
  { href: "/talento", label: "Talento" },
]

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/jobly-logo-blue.png" 
              alt="Jobly" 
              width={80} 
              height={32} 
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-700"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white hidden md:inline-flex"
          >
            <Link href="#pricing">Incorporar Talento</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="p-2 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <MobileNav items={navItems} setIsOpen={setIsOpen} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

interface MobileNavProps {
  items: { href: string; label: string }[]
  setIsOpen: (open: boolean) => void
}

function MobileNav({ items, setIsOpen }: MobileNavProps) {
  return (
    <div className="flex flex-col space-y-4 mt-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={item.href}
            className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
      <Button 
        asChild 
        className="bg-blue-600 hover:bg-blue-700 text-white mt-4 w-full"
      >
        <Link href="#pricing" onClick={() => setIsOpen(false)}>
          Incorporar Talento
        </Link>
      </Button>
    </div>
  )
}

