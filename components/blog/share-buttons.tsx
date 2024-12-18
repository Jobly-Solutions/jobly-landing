import React from 'react'
import { Facebook, Twitter, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ShareButtons({ title }: { title: string }) {
  const encodedTitle = encodeURIComponent(title)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className="flex items-center space-x-4">
      <span className="font-semibold">Compartir:</span>
      <Button variant="outline" size="sm" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '_blank')}>
        <Facebook className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="sm" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${currentUrl}`, '_blank')}>
        <Twitter className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="sm" onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${encodedTitle}`, '_blank')}>
        <Linkedin className="h-4 w-4" />
      </Button>
    </div>
  )
}

