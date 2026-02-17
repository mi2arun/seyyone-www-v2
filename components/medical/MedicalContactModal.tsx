'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react'
import { FORMSPREE_CONFIG } from '@/lib/constants'

interface MedicalContactModalProps {
    isOpen: boolean
    onClose: () => void
    initialService?: string
}

const MedicalContactModal = ({ isOpen, onClose, initialService }: MedicalContactModalProps) => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
        service: initialService || 'Select a service',
        message: ''
    })

    // Update service if initialService changes
    useEffect(() => {
        if (initialService) {
            setFormData(prev => ({ ...prev, service: initialService }))
        }
    }, [initialService])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')

        const form = e.currentTarget as HTMLFormElement
        const data = new FormData(form)

        // Add metadata
        data.append('Submission Type', 'Medical Service Inquiry')
        data.append('Source', 'Medical Consultation Modal')
        data.append('subject', `Medical Consultation: ${formData.service}`)

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_CONFIG.ENDPOINTS.MEDICAL}`, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                setStatus('success')
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    organization: '',
                    service: 'Select a service',
                    message: ''
                })
                setTimeout(() => {
                    onClose()
                    setStatus('idle')
                }, 3000)
            } else {
                const responseData = await response.json()
                setErrorMessage(responseData.errors?.[0]?.message || 'Something went wrong. Please try again.')
                setStatus('error')
            }
        } catch (error) {
            setErrorMessage('Network error. Please check your connection.')
            setStatus('error')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
                        >
                            {/* Modal Header */}
                            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between z-10">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Get Started</h3>
                                    <p className="text-sm text-gray-500">Medical Services Consultation</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X size={20} className="text-gray-500" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 md:p-8">
                                {status === 'success' ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 text-center"
                                    >
                                        <div className="w-20 h-20 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                        <p className="text-gray-600">We&apos;ve received your request and will get back to you shortly.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                                    First Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900"
                                                    placeholder="John"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Last Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    id="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900"
                                                    placeholder="Doe"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900"
                                                placeholder="john.doe@hospital.com"
                                                required
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    id="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900"
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Organization
                                                </label>
                                                <input
                                                    type="text"
                                                    name="organization"
                                                    id="organization"
                                                    value={formData.organization}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900"
                                                    placeholder="Hospital or Clinic Name"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                                Services Interested In
                                            </label>
                                            <select
                                                name="service"
                                                id="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900"
                                            >
                                                <option disabled>Select a service</option>
                                                <option value="Remote Medical Scribe">Remote Medical Scribe</option>
                                                <option value="Medical Transcription">Medical Transcription</option>
                                                <option value="Medical Billing">Medical Billing</option>
                                                <option value="Medical Coding">Medical Coding</option>
                                                <option value="EHR/EMR Support">EHR/EMR Support</option>
                                                <option value="Medical Record Summarization">Medical Record Summarization</option>
                                                <option value="Multiple Services">Multiple Services</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900"
                                                placeholder="Tell us about your requirements..."
                                                required
                                            />
                                        </div>

                                        {status === 'error' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="p-4 bg-red-50 text-red-600 rounded-xl flex items-start space-x-3 text-sm"
                                            >
                                                <AlertCircle className="shrink-0" size={18} />
                                                <span>{errorMessage}</span>
                                            </motion.div>
                                        )}

                                        <button
                                            disabled={status === 'submitting'}
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                                        >
                                            {status === 'submitting' ? (
                                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <Send size={20} />
                                                </>
                                            )}
                                        </button>

                                        <p className="text-xs text-center text-gray-500 mt-4">
                                            By submitting this form, you agree to our privacy policy and terms of service.
                                        </p>
                                    </form>
                                )}
                            </div>

                            {/* Modal Footer (Contact Info) */}
                            <div className="bg-gray-50 p-6 border-t border-gray-100">
                                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-600">
                                    <div className="flex items-center space-x-2">
                                        <Phone size={16} className="text-cyan-600" />
                                        <span>+91 (422) 2310240</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Mail size={16} className="text-cyan-600" />
                                        <span>info@seyyone.com</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}

export default MedicalContactModal
