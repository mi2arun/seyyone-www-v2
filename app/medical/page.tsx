'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import MedicalHero from '@/components/medical/MedicalHero'
import MedicalServices from '@/components/medical/MedicalServices'
import MedicalTestimonials from '@/components/medical/MedicalTestimonials'
import MedicalContactModal from '@/components/medical/MedicalContactModal'
import MedicalInsights from '@/components/medical/MedicalInsights'
import MedicalCTA from '@/components/medical/MedicalCTA'
import Footer from '@/components/Footer'

export default function MedicalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Navigation />
      <main>
        <MedicalHero onOpenModal={() => setIsModalOpen(true)} />
        <MedicalServices />
        <MedicalTestimonials onOpenModal={() => setIsModalOpen(true)} />
        <MedicalInsights />
        <MedicalCTA onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <MedicalContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Footer />
    </>
  )
}