'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, User, Mail, Phone, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react'
import { FORMSPREE_CONFIG } from '@/lib/constants'

interface ApplicationModalProps {
    isOpen: boolean
    onClose: () => void
    jobTitle: string
}

export default function ApplicationModal({ isOpen, onClose, jobTitle }: ApplicationModalProps) {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('submitting')

        const form = e.currentTarget
        const formData = new FormData(form)

        // Add job title and submission type to the form data
        formData.append('Job Title', jobTitle)
        formData.append('Submission Type', 'Job Application')
        formData.append('subject', `New Application: ${jobTitle}`)

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_CONFIG.ENDPOINTS.CAREERS}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                setStatus('success')
                form.reset()
                setTimeout(() => {
                    onClose()
                    setStatus('idle')
                }, 3000)
            } else {
                const data = await response.json()
                setErrorMessage(data.errors?.[0]?.message || 'Something went wrong. Please try again.')
                setStatus('error')
            }
        } catch (error) {
            setErrorMessage('Network error. Please check your connection.')
            setStatus('error')
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden shadow-purple-500/10"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white relative">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <h2 className="text-2xl font-bold mb-2">Apply for Position</h2>
                            <p className="text-purple-100 font-medium">{jobTitle}</p>
                        </div>

                        <div className="p-8">
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Sent!</h3>
                                    <p className="text-gray-600">Thank you for your interest. We&apos;ll be in touch soon.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input
                                                    required
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="John Doe"
                                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-900"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input
                                                    required
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="john@example.com"
                                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-900"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <input
                                                required
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="+91 (000) 000-0000"
                                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-900"
                                            />
                                        </div>
                                    </div>

                                    {/* Resume attachment hidden - enable when paid Formspree is active */}
                                    {/* 
                                    <div className="space-y-2">
                                        <label htmlFor="resume" className="text-sm font-bold text-gray-700 ml-1">Resume / CV (PDF or Word)</label>
                                        <div className="relative">
                                            <input
                                                required
                                                type="file"
                                                id="resume"
                                                name="resume"
                                                accept=".pdf,.doc,.docx"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-all text-gray-900"
                                            />
                                        </div>
                                    </div>
                                    */}

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">Message / Brief Intro</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                placeholder="Tell us a bit about yourself..."
                                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-900 resize-none"
                                            ></textarea>
                                        </div>
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
                                        className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 disabled:hover:scale-100 flex items-center justify-center space-x-2"
                                    >
                                        {status === 'submitting' ? (
                                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                <span>Submit Application</span>
                                                <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
