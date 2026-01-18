'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const healthcareKPO = [
    { name: 'Peer Review Summary', href: '/medical#services' },
    { name: 'Medical Record Summarization', href: '/medical#services' },
    { name: 'Medical Billing', href: '/medical#services' },
    { name: 'Medical Transcription', href: '/medical#services' },
    { name: 'APS Summary', href: '/medical#services' },
    { name: 'Medical Scribe', href: '/medical#services' },
    { name: 'EHR/EMR', href: '/medical#services' }
  ]

  const softwareSolutions = [
    { name: 'Cloud Solutions', href: '/technology#services' },
    { name: 'Software Services', href: '/technology#services' },
    { name: 'Talent Management', href: '/technology#services' },
    { name: 'AI/ML Solutions', href: '/technology#services' },
    { name: 'Mobile Solutions', href: '/technology#services' },
    { name: 'Remote Hardware Infra', href: '/technology#services' },
    { name: 'Analytics & Reporting', href: '/technology#services' }
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Healthcare Services', href: '/medical' },
    { name: 'Technology Solutions', href: '/technology' },
    { name: 'Career Opportunities', href: '/career' },
    { name: 'Contact Us', href: '/contact' }
  ]

  const insights = [
    { name: 'Healthcare KPO', href: '/medical' },
    { name: 'Technology Solutions', href: '/technology' },
    { name: 'About Seyyone', href: '/about' },
    { name: 'Join Our Team', href: '/career' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-4 grid lg:grid-cols-6 md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-2 md:col-span-3">
            <div className="flex items-center mb-4">
              <motion.img
                src="/logo-blue.png"
                alt="Seyyone Logo"
                className="w-32 h-32 object-contain"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: [1, 1.05, 1]
                }}
                viewport={{ once: true }}
                transition={{
                  opacity: { duration: 0.6 },
                  y: { duration: 0.6 },
                  scale: { duration: 2, repeat: Infinity, repeatDelay: 4 }
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              />
            </div>

            <p className="text-gray-300 mb-3 leading-relaxed text-sm">
              Transforming businesses through technology and expertise since 1999.
              Delivering innovative Healthcare KPO and Software Development solutions
              to 70+ clients across 6 countries with our team of 150+ professionals.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Phone size={14} className="text-primary-400" />
                <a href="tel:+914222310240" className="hover:text-primary-400 transition-colors">
                  91 (422) 2310240
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail size={14} className="text-primary-400" />
                <a href="mailto:contact@seyyone.com" className="hover:text-primary-400 transition-colors">
                  contact@seyyone.com
                </a>
              </div>
              <div className="flex items-start space-x-2 text-gray-300 text-sm">
                <MapPin size={14} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span>
                  73, Anna Nagar, Ramanathapuram,<br />
                  Coimbatore-641045, TN, India
                </span>
              </div>
            </div>
          </div>

          {/* Healthcare KPO */}
          <div>
            <h3 className="text-base font-semibold mb-3">Healthcare KPO</h3>
            <ul className="space-y-1">
              {healthcareKPO.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Software Solutions */}
          <div>
            <h3 className="text-base font-semibold mb-3">Software Solutions</h3>
            <ul className="space-y-1">
              {softwareSolutions.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">Company</h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h3 className="text-base font-semibold mb-3">Insights</h3>
            <ul className="space-y-1 mb-4">
              {insights.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link href="/hipaa-compliance">
              <div className="bg-secondary-800 rounded-lg p-3 hover:bg-secondary-700 transition-colors cursor-pointer">
                <h4 className="font-semibold text-green-400 mb-1 text-xs">
                  HIPAA Compliant
                </h4>
                <p className="text-xs text-gray-300">
                  Ensuring highest standards of data security and compliance.
                </p>
              </div>
            </Link>

            <Link
              href="/contact#contact-form"
              className="bg-primary-600 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block text-center w-full mt-3 text-sm"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-800 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-400 text-xs">
              © 2024 Seyyone. All rights reserved. | Transforming Businesses Since 1999
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-xs">Serving 6 Countries:</span>
              <div className="flex space-x-1.5 text-sm">
                <span title="USA">🇺🇸</span>
                <span title="UK">🇬🇧</span>
                <span title="Canada">🇨🇦</span>
                <span title="Australia">🇦🇺</span>
                <span title="Ireland">🇮🇪</span>
                <span title="Germany">🇩🇪</span>
              </div>

              <button
                onClick={scrollToTop}
                className="bg-primary-600 hover:bg-primary-700 p-1.5 rounded-lg transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer