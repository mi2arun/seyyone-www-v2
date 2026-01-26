'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState('')

  useEffect(() => {
    setCurrentHash(window.location.hash)
    const handleHashChange = () => setCurrentHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('popstate', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handleHashChange)
    }
  }, [])

  // Handle scroll effects
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setMobileSubmenu(null)
  }, [pathname])

  const navigationItems = [
    {
      name: 'Home',
      type: 'link',
      href: '/'
    },
    {
      name: 'About',
      type: 'dropdown',
      href: '/about',
      items: [
        { name: 'Life at Seyyone', href: '/about/life-at-seyyone' },
        { name: 'Testimonials', href: '/about/testimonials' },
      ]
    },
    {
      name: 'Healthcare',
      type: 'dropdown',
      href: '/medical',
      items: [
        { name: 'Medical Scribe', href: '/medical/medical-scribe' },
        { name: 'Medical Record Summarization', href: '/medical/medical-record-summarization' },
        { name: 'Medical Transcription', href: '/medical/medical-transcription' },
        { name: 'Peer Review Summary', href: '/medical/peer-review-summary' },
        { name: 'Medical Billing', href: '/medical/medical-billing' },
        { name: 'APS Summary', href: '/medical/aps-summary' },
        { name: 'EHR/EMR', href: '/medical/ehr-emr' },
      ]
    },
    {
      name: 'Software',
      type: 'dropdown',
      href: '/technology',
      items: [
        { name: 'Software Services', href: '/technology/software-services' },
        { name: 'Cloud Solutions', href: '/technology/cloud-solutions' },
        { name: 'AI/ML Solutions', href: '/technology/ai-ml-solutions' },
        { name: 'Mobile Solutions', href: '/technology/mobile-solutions' },
        { name: 'Talent Management', href: '/technology/talent-management' },
        { name: 'Remote Hardware Infra', href: '/technology/remote-hardware-infra' },
        { name: 'Analytics & Reporting', href: '/technology/analytics-reporting' },
      ]
    },
    {
      name: 'Insights',
      type: 'dropdown',
      href: '/insights',
      items: [
        { name: 'Blogs', href: '/insights#blogs' },
        { name: 'Articles', href: '/insights#articles' },
        { name: 'Case Studies', href: '/insights#case-studies' },
      ]
    },
    {
      name: 'Careers',
      type: 'dropdown',
      href: '/career',
      items: [
        { name: 'Current Openings', href: '/open-positions' },
      ]
    }
  ]

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenu(mobileSubmenu === name ? null : name)
  }

  // Helper to check if a section is active (parent or any child)
  const isSectionActive = (item: any) => {
    if (pathname === item.href) return true;
    if (item.items?.some((sub: any) => pathname === sub.href)) return true;
    // Also check if pathname starts with the parent href (e.g. /medical/something)
    if (item.href && item.href !== '/' && pathname.startsWith(item.href)) return true;
    return false;
  }

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
          borderBottom: '1px solid rgba(229, 231, 235, 0.8)',
          boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.15)' : '0 4px 16px rgba(0, 0, 0, 0.08)'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
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
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item, index) => {
                const isActive = isSectionActive(item);

                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href || '#'}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center group ${isActive
                        ? 'text-white'
                        : 'text-gray-700 hover:text-primary-600'
                        }`}
                    >
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-lg"
                          style={{ backgroundColor: '#0095d9' }}
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}

                      {/* Hover effect for non-active items */}
                      {!isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ backgroundColor: 'rgba(0, 149, 217, 0.1)' }}
                        />
                      )}

                      <span className="relative z-10">{item.name}</span>
                      {item.type === 'dropdown' && (
                        <ChevronDown size={16} className="ml-1 relative z-10 transition-transform group-hover:rotate-180" />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.items && (
                      <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 hover:text-primary-600 ${pathname === subItem.href || (pathname + currentHash) === subItem.href ? 'text-primary-600 bg-gray-50 font-medium' : 'text-gray-600'
                                }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}


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
                      <span>Get In Touch</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
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

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-3 text-gray-700 bg-white rounded-xl shadow-lg border border-gray-200/60"
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

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden bg-white border-t border-gray-200/60 shadow-lg"
              >
                <div className="container py-6">
                  <div className="flex flex-col space-y-2">
                    {navigationItems.map((item) => (
                      <div key={item.name} className="overflow-hidden">
                        {item.type === 'link' ? (
                          <Link
                            href={item.href!}
                            className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${pathname === item.href ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                              }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="font-medium">{item.name}</span>
                          </Link>
                        ) : (
                          <div>
                            <button
                              onClick={() => toggleMobileSubmenu(item.name)}
                              className={`flex items-center justify-between w-full p-4 rounded-xl transition-all duration-300 ${mobileSubmenu === item.name ? 'bg-gray-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                              <span className="font-medium">{item.name}</span>
                              <ChevronDown
                                size={20}
                                className={`transition-transform duration-300 ${mobileSubmenu === item.name ? 'rotate-180' : ''}`}
                              />
                            </button>
                            <AnimatePresence>
                              {mobileSubmenu === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="bg-gray-50/50 rounded-b-xl lg:hidden"
                                >
                                  {item.items?.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className={`block px-8 py-3 text-sm text-gray-600 hover:text-primary-600 ${pathname === subItem.href || (pathname + currentHash) === subItem.href ? 'text-primary-600 font-medium' : ''
                                        }`}
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Mobile CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="pt-4 border-t border-gray-200/50 mt-4"
                    >
                      <Link
                        href="/contact"
                        className="flex items-center justify-center space-x-2 w-full p-4 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        style={{ backgroundColor: '#0095d9' }}
                        onClick={() => setIsOpen(false)}
                      >
                        <span>Get In Touch</span>
                        <ArrowRight size={18} />
                      </Link>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="pt-6 border-t border-gray-200/50 space-y-3">
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Phone size={16} className="text-primary-600" />
                        <span>+91 (422) 2310240</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Mail size={16} className="text-primary-600" />
                        <span>info@seyyone.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}

export default Navigation