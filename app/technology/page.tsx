import Navigation from '@/components/Navigation'
import TechnologyHero from '@/components/technology/TechnologyHero'
import TechnologyServices from '@/components/technology/TechnologyServices'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Technology & Software Solutions | Seyyone - AI/ML, Cloud & Mobile Development',
  description: 'Innovative software development services including AI/ML solutions, cloud services, mobile applications, and custom software development. Transform your business with cutting-edge technology.',
  keywords: 'software development, AI ML solutions, cloud services, mobile applications, custom software, technology solutions, digital transformation'
}

export default function TechnologyPage() {
  return (
    <>
      <Navigation />
      <main>
        <TechnologyHero />
        <TechnologyServices />
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}