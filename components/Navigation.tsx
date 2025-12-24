'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  // Handle scroll effects
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

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
    { name: 'Blogs', href: '/insights#blogs' },
    { name: 'Articles', href: '/insights#articles' },
    { name: 'Whitepapers', href: '/insights#whitepapers' },
    { name: 'Testimonials', href: '/insights#testimonials' },
    { name: 'Case Studies', href: '/insights#case-studies' },
  ]

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Healthcare', href: '/medical' },
    { name: 'Technology', href: '/technology' },
    { name: 'Insights', href: '/insights' },
    { name: 'Careers', href: '/career' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{
          scaleX: scrollY,
          backgroundColor: '#0095d9'
        }}
        initial={{ scaleX: 0 }}
      />

      <motion.nav
        className="fixed top-0 w-full z-40 transition-all duration-300 bg-white"
        style={{
          backgroundColor: 'rgb(255, 255, 255)',
          borderBottom: '1px solid rgba(229, 231, 235, 0.8)',
          boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.15)' : '0 4px 16px rgba(0, 0, 0, 0.08)'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src="/logo-blue.png"
                  alt="Seyyone Logo"
                  className="w-32 h-32 object-contain cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Logo glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-xl -z-10"
                  style={{ backgroundColor: 'rgba(0, 149, 217, 0.2)' }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${pathname === item.href
                      ? 'text-white'
                      : 'text-gray-700'
                      }`}
                    style={{
                      color: pathname !== item.href ? undefined : 'white'
                    }}
                    onMouseEnter={(e) => {
                      if (pathname !== item.href) {
                        e.currentTarget.style.color = '#0095d9'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (pathname !== item.href) {
                        e.currentTarget.style.color = '#374151'
                      }
                    }}
                  >
                    {/* Active background */}
                    {pathname === item.href && (
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        style={{ backgroundColor: '#0095d9' }}
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Hover background */}
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: 'rgba(0, 149, 217, 0.1)' }}
                      whileHover={{ scale: 1.05 }}
                    />

                    <span className="relative z-10">{item.name}</span>

                    {/* Underline indicator */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"
                      style={{ backgroundColor: '#0095d9' }}
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Enhanced CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="ml-6"
              >
                <Link href="/contact" className="group relative">
                  <motion.div
                    className="relative inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-full shadow-lg overflow-hidden"
                    style={{ backgroundColor: '#0095d9' }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0, 149, 217, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Get Started</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>

                    {/* Button shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-3 text-gray-700 bg-white rounded-xl shadow-lg border border-gray-200/60"
              style={{
                color: '#374151'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#0095d9'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#374151'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Enhanced Mobile Navigation */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              height: isOpen ? 'auto' : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-200/60 shadow-lg"
          >
            <div className="container py-6">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      x: isOpen ? 0 : -20
                    }}
                    transition={{
                      delay: isOpen ? index * 0.1 : 0,
                      duration: 0.3
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${pathname === item.href
                        ? 'text-white shadow-lg'
                        : 'text-gray-700'
                        }`}
                      style={{
                        backgroundColor: pathname === item.href ? '#0095d9' : 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        if (pathname !== item.href) {
                          e.currentTarget.style.backgroundColor = 'rgba(0, 149, 217, 0.1)'
                          e.currentTarget.style.color = '#0095d9'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (pathname !== item.href) {
                          e.currentTarget.style.backgroundColor = 'transparent'
                          e.currentTarget.style.color = '#374151'
                        }
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-medium">{item.name}</span>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : 20
                  }}
                  transition={{ delay: isOpen ? 0.6 : 0, duration: 0.3 }}
                  className="pt-4 border-t border-gray-200/50 mt-4"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center space-x-2 w-full p-4 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: '#0095d9' }}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Get Started</span>
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ delay: isOpen ? 0.8 : 0, duration: 0.3 }}
                  className="pt-6 border-t border-gray-200/50 space-y-3"
                >
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Phone size={16} style={{ color: '#0095d9' }} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Mail size={16} style={{ color: '#0095d9' }} />
                    <span>hello@seyyone.com</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  )
}

export default Navigation