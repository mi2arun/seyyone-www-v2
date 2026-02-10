'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import TechnologyHero from '@/components/technology/TechnologyHero'
import TechnologyServices from '@/components/technology/TechnologyServices'
import TechnologyTestimonials from '@/components/technology/TechnologyTestimonials'
import TechnologyInsights from '@/components/technology/TechnologyInsights'
import TechnologyCTA from '@/components/technology/TechnologyCTA'
import TechnologyContactModal from '@/components/technology/TechnologyContactModal'
import Footer from '@/components/Footer'

export default function TechnologyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Navigation />
      <main>
        <TechnologyHero onOpenModal={() => setIsModalOpen(true)} />
        <TechnologyServices onOpenModal={() => setIsModalOpen(true)} />
        <TechnologyTestimonials onOpenModal={() => setIsModalOpen(true)} />
        <TechnologyInsights />
        <TechnologyCTA onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <TechnologyContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Footer />
    </>
  )
}