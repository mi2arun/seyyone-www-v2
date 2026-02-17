'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
    return (
        <>
            <Navigation />
            <main className="bg-white min-h-screen">
                {/* Hero Section */}
                <section className="relative pt-40 pb-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 overflow-hidden border-b border-gray-100">
                    <div className="container relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                                Privacy <span className="text-blue-600">Policy</span>
                            </h1>
                            <p className="text-xl text-gray-600 font-medium">
                                Last updated: May 17, 2025
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-12 text-gray-600 leading-relaxed">

                                {/* Introduction */}
                                <p className="text-xl">
                                    This Privacy Policy describes how Seyyone Software Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your information when you use the Seyyone Scribe mobile application (&quot;Application&quot;). We are committed to protecting your privacy and ensuring the security of your personal information.
                                </p>

                                {/* 1. Information We Collect */}
                                <div className="space-y-8">
                                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide border-b border-gray-100 pb-4">1. Information We Collect</h2>

                                    <div className="space-y-6 pl-0 md:pl-6">
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-gray-900">1.1 Personal Information</h3>
                                            <p>We may collect the following types of personal information:</p>
                                            <ul className="list-disc list-inside space-y-2 pl-4">
                                                <li>Name and contact information (email address, phone number)</li>
                                                <li>Account credentials (username, password)</li>
                                                <li>Professional information (medical practice details, specialty)</li>
                                                <li>Audio recordings and transcriptions</li>
                                                <li>Usage data and analytics</li>
                                            </ul>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-gray-900">1.2 Automatically Collected Information</h3>
                                            <p>We automatically collect certain information when you use our Application:</p>
                                            <ul className="list-disc list-inside space-y-2 pl-4">
                                                <li>Device information (device type, operating system, unique device identifiers)</li>
                                                <li>Log data (IP address, access times, pages viewed)</li>
                                                <li>Usage patterns and preferences</li>
                                                <li>Location data (if permitted by device settings)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. How We Use Your Information */}
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide border-b border-gray-100 pb-4">2. How We Use Your Information</h2>
                                    <div className="pl-0 md:pl-6 space-y-4">
                                        <p>We use your information for the following purposes:</p>
                                        <ul className="list-disc list-inside space-y-2 pl-4">
                                            <li>To provide and maintain our Application services</li>
                                            <li>To process and transcribe audio recordings</li>
                                            <li>To improve our services and user experience</li>
                                            <li>To communicate with you about your account and services</li>
                                            <li>To provide customer support</li>
                                            <li>To comply with legal obligations</li>
                                            <li>To detect and prevent fraud or security issues</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* 3. Information Sharing and Disclosure */}
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide border-b border-gray-100 pb-4">3. Information Sharing and Disclosure</h2>
                                    <div className="pl-0 md:pl-6 space-y-4">
                                        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                                        <ul className="list-disc list-inside space-y-2 pl-4">
                                            <li><span className="font-bold text-gray-900">Service Providers:</span> With trusted third-party service providers who assist us in operating our Application</li>
                                            <li><span className="font-bold text-gray-900">Legal Requirements:</span> When required by law, court order, or government request</li>
                                            <li><span className="font-bold text-gray-900">Business Transfers:</span> In connection with a merger, acquisition, or sale of assets</li>
                                            <li><span className="font-bold text-gray-900">Consent:</span> With your explicit consent for specific purposes</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* 4. Data Security */}
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide border-b border-gray-100 pb-4">4. Data Security</h2>
                                    <div className="pl-0 md:pl-6 space-y-4">
                                        <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
                                        <ul className="list-disc list-inside space-y-2 pl-4">
                                            <li>Encryption of data in transit and at rest</li>
                                            <li>Regular security assessments and updates</li>
                                            <li>Access controls and authentication measures</li>
                                            <li>HIPAA compliance for healthcare-related data</li>
                                            <li>GDPR compliance for European users</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* 5. Data Retention */}
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900">5. Data Retention</h2>
                                    <p className="pl-0 md:pl-6">
                                        We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. Audio recordings and transcriptions are typically retained for the duration specified in your service agreement.
                                    </p>
                                </div>

                                {/* 6. Your Rights and Choices */}
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900">6. Your Rights and Choices</h2>
                                    <div className="pl-0 md:pl-6 space-y-4">
                                        <p>Depending on your location, you may have the following rights:</p>
                                        <ul className="list-disc list-inside space-y-2 pl-4">
                                            <li>Access: Request access to your personal information</li>
                                            <li>Correction: Request correction of inaccurate information</li>
                                            <li>Deletion: Request deletion of your personal information</li>
                                            <li>Portability: Request transfer of your data to another service</li>
                                            <li>Opt-out: Opt-out of certain data processing activities</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* 7. Cookies and Tracking Technologies */}
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900">7. Cookies and Tracking Technologies</h2>
                                    <div className="pl-0 md:pl-6 space-y-4">
                                        <p>We use cookies and similar tracking technologies to:</p>
                                        <ul className="list-disc list-inside space-y-2 pl-4">
                                            <li>Remember your preferences and settings</li>
                                            <li>Analyze usage patterns and improve our services</li>
                                            <li>Provide personalized content and features</li>
                                            <li>Ensure security and prevent fraud</li>
                                        </ul>
                                        <p>You can control cookie settings through your browser or device settings.</p>
                                    </div>
                                </div>

                                {/* 8. Third-Party Services */}
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900">8. Third-Party Services</h2>
                                    <p className="pl-0 md:pl-6">
                                        Our Application may integrate with third-party services (such as cloud storage providers). These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party services.
                                    </p>
                                </div>

                                {/* 9. International Data Transfers */}
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900">9. International Data Transfers</h2>
                                    <p className="pl-0 md:pl-6">
                                        Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                                    </p>
                                </div>

                                {/* 10. Children's Privacy */}
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900">10. Children&rsquo;s Privacy</h2>
                                    <p className="pl-0 md:pl-6">
                                        Our Application is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
                                    </p>
                                </div>

                                {/* 11. Changes to This Privacy Policy */}
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900">11. Changes to This Privacy Policy</h2>
                                    <p className="pl-0 md:pl-6">
                                        We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and within the Application.
                                    </p>
                                </div>

                                {/* 12. Contact Us */}
                                <div className="space-y-6 pt-12 border-t border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">12. Contact Us</h2>
                                    <div className="pl-0 md:pl-6 space-y-4">
                                        <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
                                        <div className="space-y-2">
                                            <p><span className="font-bold text-gray-900">Email:</span> <a href="mailto:privacy@seyyone.com" className="text-blue-600 hover:underline">privacy@seyyone.com</a></p>
                                            <p><span className="font-bold text-gray-900">Address:</span> 73, Anna Nagar, Ramanathapuram, Coimbatore-641045. TN, India</p>
                                            <p><span className="font-bold text-gray-900">Phone:</span> <a href="tel:+914222310240" className="text-blue-600 hover:underline">+91 (422) 2310240</a></p>
                                        </div>
                                    </div>
                                </div>

                                {/* 13. Compliance */}
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">13. Compliance</h2>
                                    <div className="pl-0 md:pl-6 space-y-6">
                                        <p>We are committed to compliance with applicable privacy laws and regulations, including:</p>
                                        <ul className="list-disc list-inside space-y-2 pl-4">
                                            <li>Health Insurance Portability and Accountability Act (HIPAA)</li>
                                            <li>General Data Protection Regulation (GDPR)</li>
                                            <li>California Consumer Privacy Act (CCPA)</li>
                                            <li>Other applicable local and international privacy laws</li>
                                        </ul>
                                        <p className="text-sm font-medium pt-8">
                                            By using our Application, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
