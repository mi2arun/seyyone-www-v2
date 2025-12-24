import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}