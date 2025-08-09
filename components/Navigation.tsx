'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isWhoWeAreOpen, setIsWhoWeAreOpen] = useState(false)
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false)
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false)
  const [isInsightsOpen, setIsInsightsOpen] = useState(false)

  const whoWeAreItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Life At Seyyone', href: '/life-at-seyyone' },
    { name: 'Clients', href: '/clients' },
    { name: 'Our Management Team', href: '/management-team' },
    { name: 'Testimonial', href: '/testimonials' },
  ]

  const healthcareKPOItems = [
    { name: 'EHR/EMR Virtual Assistance', href: '/services/ehr-emr-assistance' },
    { name: 'Medical Transcription', href: '/services/medical-transcription' },
    { name: 'Medical Scribe', href: '/services/medical-scribe' },
    { name: 'Medical Billing', href: '/services/medical-billing' },
    { name: 'Remote Medical Scribe Services', href: '/services/remote-medical-scribe' },
    { name: 'Medical Record Summarization', href: '/services/medical-record-summarization' },
    { name: 'APS Summary', href: '/services/aps-summary' },
    { name: 'Peer Review Summary', href: '/services/peer-review-summary' },
  ]

  const softwareSolutionsItems = [
    { name: 'Software Services', href: '/services/software-services' },
    { name: 'Mobile Solutions', href: '/services/mobile-solutions' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'AI/ML Solutions', href: '/services/ai-ml-solutions' },
    { name: 'Analytical and Reporting', href: '/services/analytical-reporting' },
    { name: 'Talent Management', href: '/services/talent-management' },
    { name: 'Remote Hardware Infra', href: '/services/remote-hardware-infra' },
  ]

  const joinUsItems = [
    { name: 'Career', href: '/career' },
    { name: 'Open Positions', href: '/open-positions' },
  ]

  const insightsItems = [
    { name: 'Blogs', href: '/blogs' },
    { name: 'Articles', href: '/articles' },
    { name: 'Infographics', href: '/infographics' },
    { name: 'Case Study', href: '/case-study' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.img 
              src="/logo-blue.png" 
              alt="Seyyone Logo" 
              className="w-20 h-20 object-contain cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                opacity: { duration: 0.6 },
                scale: { duration: 0.6 },
                rotate: { duration: 2, repeat: Infinity, repeatDelay: 3 }
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.6 }
              }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Desktop Navigation - Simplified */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Home
            </Link>
            
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              About
            </Link>
            
            <Link href="/medical" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Healthcare
            </Link>
            
            <Link href="/technology" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Technology
            </Link>

            <Link href="/career" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Careers
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Contact
            </Link>
            
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Simplified */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <Link
                href="/medical"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Healthcare
              </Link>
              
              <Link
                href="/technology"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Technology
              </Link>

              <Link
                href="/career"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <Link
                href="/contact"
                className="btn-primary w-fit"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation