import Navigation from '@/components/Navigation'
import MedicalHero from '@/components/medical/MedicalHero'
import MedicalServices from '@/components/medical/MedicalServices'
import MedicalTestimonials from '@/components/medical/MedicalTestimonials'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Healthcare & Medical Services | Seyyone - HIPAA Compliant Medical Transcription',
  description: 'Professional healthcare KPO services including medical transcription, billing, coding, and EHR support. HIPAA compliant with 25+ years of experience serving healthcare providers worldwide.',
  keywords: 'medical transcription, medical billing, healthcare BPO, medical coding, EHR support, HIPAA compliant, medical scribe services'
}

export default function MedicalPage() {
  return (
    <>
      <Navigation />
      <main>
        <MedicalHero />
        <MedicalServices />
        <MedicalTestimonials />
      </main>
      <Footer />
    </>
  )
}