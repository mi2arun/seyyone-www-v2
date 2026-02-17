'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUp, Facebook, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  const services = [
    { name: 'Healthcare KPO', href: '/medical' },
    { name: 'Technology & Service', href: '/technology' }
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/career' },
    { name: 'Contact Us', href: '/contact' }
  ]

  const insightsLinks = [
    { name: 'Case Studies', href: '/insights#case-studies' },
    { name: 'Blogs', href: '/insights#blogs' },
    { name: 'Articles', href: '/insights#articles' }
  ]

  const supportLinks = [
    { name: 'HIPAA Compliance', href: '/hipaa-compliance' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'FAQ', href: '/faq' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-4 grid lg:grid-cols-6 md:grid-cols-3 gap-6 items-start">
          {/* Company Info */}
          <div className="lg:col-span-2 md:col-span-3">
            <motion.img
              src="/logo-blue-small.png"
              alt="Seyyone Logo"
              className="object-contain mb-3"
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

            <p className="text-gray-300 mb-3 leading-relaxed text-sm">
              Transforming businesses through technology and expertise since 1999.
              Delivering innovative solutions to 70+ clients across 7 countries.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Phone size={14} className="text-primary-400" />
                <a href="tel:+914222310240" className="hover:text-primary-400 transition-colors">
                  +91 (422) 2310240
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail size={14} className="text-primary-400" />
                <a href="mailto:info@seyyone.com" className="hover:text-primary-400 transition-colors">
                  info@seyyone.com
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

            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="w-8 h-8 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-3">Services</h3>
            <ul className="space-y-1">
              {services.map((service) => (
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

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold mb-3">Company</h3>
            <ul className="space-y-1">
              {company.map((link) => (
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
            <ul className="space-y-1">
              {insightsLinks.map((item) => (
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
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-semibold mb-3">Support</h3>
            <ul className="space-y-1">
              {supportLinks.map((item) => (
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
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-800 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-400 text-xs">
              © 2024 Seyyone. All rights reserved. | Transforming Businesses Since 1999
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-xs">Serving 7 Countries:</span>
              <div className="flex space-x-1.5 text-sm">
                <span title="USA">🇺🇸</span>
                <span title="UK">🇬🇧</span>
                <span title="Canada">🇨🇦</span>
                <span title="Australia">🇦🇺</span>
                <span title="Ireland">🇮🇪</span>
                <span title="Israel">🇮🇱</span>
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