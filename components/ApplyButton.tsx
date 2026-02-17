'use client'

import React, { useState } from 'react'
import ApplicationModal from './ApplicationModal'

interface ApplyButtonProps {
    jobTitle: string
    label?: string
    className?: string
}

export default function ApplyButton({ jobTitle, label = "Apply Now", className }: ApplyButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const defaultClass = "block w-full bg-purple-600 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className={className || defaultClass}
            >
                {label}
            </button>

            <ApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={jobTitle}
            />
        </>
    )
}
