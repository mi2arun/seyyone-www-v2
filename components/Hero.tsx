'use client'

import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Shield, Globe, Award, Sparkles, TrendingUp, Stethoscope, Code, Heart, Brain, Mic, Volume2, Headphones, FileText } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

const Hero = () => {
  const titleControls = useAnimation()
  const subtitleControls = useAnimation()

  useEffect(() => {
    const animateText = async () => {
      await titleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      })

      await subtitleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
      })
    }

    animateText()
  }, [titleControls, subtitleControls])

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const wordVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const AnimatedText = ({ text, className = "", delay = 0 }: { text: string, className?: string, delay?: number }) => (
    <motion.span
      variants={wordVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={className}
    >
      {text.split(' ').map((word, wordIndex) => (
        <motion.span key={wordIndex} className="inline-block mr-2">
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterVariants}
              transition={{ duration: 0.5, delay: wordIndex * 0.1 + letterIndex * 0.05 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.span>
  )

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16 sm:pt-20 pb-12 sm:pb-16 w-full">
      {/* Enhanced Background with Animated Gradients and Color Lines */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, #f0f9ff, #ffffff, #f8fafc)",
              "linear-gradient(45deg, #e0f2fe, #f0f9ff, #e2e8f0)",
              "linear-gradient(45deg, #f0f9ff, #ffffff, #f8fafc)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full"
        />

        {/* Speech-to-Text Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Speech-to-Text Process Animation - Top Left */}
          <motion.div
            className="absolute"
            style={{ display: 'none' }}
          >
            {/* Microphone with pulse effect */}
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Mic size={24} className="text-blue-400/60" />

              {/* Sound waves from microphone */}
              <motion.div
                className="absolute -right-8 top-1/2 transform -translate-y-1/2"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              >
                <div className="w-3 h-3 border-2 border-blue-400/40 rounded-full"></div>
              </motion.div>
              <motion.div
                className="absolute -right-12 top-1/2 transform -translate-y-1/2"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 0, 0.4]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.3
                }}
              >
                <div className="w-4 h-4 border-2 border-blue-400/30 rounded-full"></div>
              </motion.div>
            </motion.div>

            {/* Arrow pointing to processing */}
            <motion.div
              className="absolute top-8 left-6 text-gray-400/50"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                x: [0, 3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1
              }}
            >
              →
            </motion.div>

            {/* AI Processing Brain */}
            <motion.div
              className="absolute top-6 left-12"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 1.5
              }}
            >
              <Brain size={20} className="text-purple-400/60" />

              {/* Processing dots */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1">
                <motion.div
                  className="w-1 h-1 bg-purple-400/50 rounded-full"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-1 h-1 bg-purple-400/50 rounded-full"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div
                  className="w-1 h-1 bg-purple-400/50 rounded-full"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                />
              </div>
            </motion.div>

            {/* Arrow to text output */}
            <motion.div
              className="absolute top-8 left-20 text-gray-400/50"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                x: [0, 3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 2
              }}
            >
              →
            </motion.div>

            {/* Text Output */}
            <motion.div
              className="absolute top-4 left-28"
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1, 1, 0.8]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 2.5
              }}
            >
              <FileText size={22} className="text-green-400/60" />
              <motion.div
                className="absolute -bottom-8 -left-2 text-xs text-green-400/50 font-mono whitespace-nowrap"
                animate={{
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 3
                }}
              >
                &quot;Patient presents with...&quot;
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Speech Bubble Animation - Top Right */}
          <motion.div
            className="absolute"
            style={{ display: 'none' }}
          >
            {/* Speech Bubble */}
            <motion.div
              className="relative"
              animate={{
                scale: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="bg-blue-100/60 px-4 py-2 rounded-lg relative">
                <motion.div
                  className="text-xs text-blue-600/80 font-medium"
                  animate={{
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                >
                  &quot;Blood pressure 120/80&quot;
                </motion.div>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-100/60"></div>
              </div>

              {/* Transform arrow */}
              <motion.div
                className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-gray-400/60"
                animate={{
                  opacity: [0, 1, 1, 0],
                  x: [0, 5, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 2
                }}
              >
                →
              </motion.div>

              {/* Text Document */}
              <motion.div
                className="absolute -right-16 -top-2"
                animate={{
                  scale: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 3
                }}
              >
                <div className="bg-green-100/60 px-3 py-2 rounded text-xs text-green-600/80 font-mono">
                  BP: 120/80 mmHg
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Audio Waveform to Text Animation - Bottom Center */}
          <motion.div
            className="absolute"
            style={{ display: 'none' }}
          >
            {/* Audio Waveform */}
            <div className="flex items-end space-x-1">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-purple-400/60 rounded-full"
                  animate={{
                    height: [8, 25, 12, 30, 8],
                    opacity: [0.4, 1, 0.6, 1, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>

            {/* Typing Animation */}
            <motion.div
              className="absolute -bottom-12 left-0"
              animate={{
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 1
              }}
            >
              <div className="text-xs text-gray-600/60 font-mono">
                <motion.span
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
                >
                  |
                </motion.span>
                <motion.div
                  className="inline"
                  animate={{
                    width: ['0ch', '15ch', '15ch', '0ch']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1
                  }}
                  style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
                >
                  Transcribing...
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Medical Recording Process - Middle Left */}
          <motion.div
            className="absolute"
            style={{ display: 'none' }}
          >
            {/* Doctor Icon */}
            <motion.div
              className="relative"
              animate={{
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              <Stethoscope size={20} className="text-cyan-400/60" />

              {/* Voice lines */}
              <motion.div
                className="absolute -right-6 top-1/2 transform -translate-y-1/2"
                animate={{
                  opacity: [0, 1, 0],
                  scaleX: [0.5, 1.5, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              >
                <div className="flex space-x-1">
                  <div className="w-0.5 h-2 bg-cyan-400/40 rounded-full"></div>
                  <div className="w-0.5 h-3 bg-cyan-400/50 rounded-full"></div>
                  <div className="w-0.5 h-2 bg-cyan-400/40 rounded-full"></div>
                </div>
              </motion.div>

              {/* Recording indicator */}
              <motion.div
                className="absolute -top-4 -left-2"
                animate={{
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity
                }}
              >
                <div className="w-2 h-2 bg-red-400/60 rounded-full"></div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Development Pipeline Animation - Middle Right */}
          <motion.div
            className="absolute"
            style={{ display: 'none' }}
          >
            {/* Code Icon with typing effect */}
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              <Code size={22} className="text-indigo-400/60" />

              {/* Code lines animation */}
              <motion.div
                className="absolute -right-12 -top-2 space-y-1"
                animate={{
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5
                }}
              >
                <motion.div
                  className="h-1 bg-indigo-400/50 rounded-full"
                  animate={{
                    width: ['0px', '20px', '20px', '0px']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1
                  }}
                />
                <motion.div
                  className="h-1 bg-indigo-400/40 rounded-full"
                  animate={{
                    width: ['0px', '16px', '16px', '0px']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1.2
                  }}
                />
                <motion.div
                  className="h-1 bg-indigo-400/50 rounded-full"
                  animate={{
                    width: ['0px', '24px', '24px', '0px']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1.4
                  }}
                />
              </motion.div>

              {/* Build arrow */}
              <motion.div
                className="absolute -right-16 top-4 text-gray-400/50"
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, 3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 2
                }}
              >
                ↓
              </motion.div>
            </motion.div>

            {/* Build Process */}
            <motion.div
              className="absolute -right-8 top-12"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 2.5
              }}
            >
              <div className="relative">
                <div className="w-4 h-4 border-2 border-orange-400/50 rounded-sm"></div>

                {/* Build progress bars */}
                <motion.div
                  className="absolute -bottom-6 -left-2 space-y-1"
                  animate={{
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 3
                  }}
                >
                  <motion.div
                    className="h-0.5 bg-orange-400/60 rounded-full"
                    animate={{
                      width: ['0px', '16px', '16px', '0px']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 3.2
                    }}
                  />
                  <motion.div
                    className="h-0.5 bg-green-400/60 rounded-full"
                    animate={{
                      width: ['0px', '14px', '14px', '0px']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 3.5
                    }}
                  />
                </motion.div>
              </div>

              {/* Deploy arrow */}
              <motion.div
                className="absolute -right-6 top-2 text-gray-400/50"
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, 3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 4
                }}
              >
                →
              </motion.div>
            </motion.div>

            {/* Deployment Success */}
            <motion.div
              className="absolute -right-16 top-10"
              animate={{
                scale: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 4.5
              }}
            >
              <div className="w-3 h-3 bg-green-400/60 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <motion.div
                className="absolute -bottom-4 -left-4 text-xs text-green-400/50 font-mono whitespace-nowrap"
                animate={{
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 5
                }}
              >
                ✓ Deployed
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CI/CD Pipeline Animation - Bottom Right */}
          <motion.div
            className="absolute"
            style={{ display: 'none' }}
          >
            {/* Git Commit */}
            <motion.div
              className="relative"
              animate={{
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              <div className="w-3 h-3 border-2 border-blue-400/60 rounded-full">
                <motion.div
                  className="w-full h-full bg-blue-400/40 rounded-full"
                  animate={{
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity
                  }}
                />
              </div>

              {/* Commit message */}
              <motion.div
                className="absolute -top-6 -left-6 text-xs text-blue-400/50 font-mono"
                animate={{
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5
                }}
              >
                git commit
              </motion.div>

              {/* Pipeline stages */}
              <div className="absolute left-6 top-1 flex items-center space-x-2">
                {/* Test stage */}
                <motion.div
                  className="relative"
                  animate={{
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1
                  }}
                >
                  <div className="w-2 h-2 bg-yellow-400/60 rounded-full"></div>
                  <motion.div
                    className="absolute -top-4 -left-2 text-xs text-yellow-400/50"
                    animate={{
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.2
                    }}
                  >
                    Test
                  </motion.div>
                </motion.div>

                {/* Build stage */}
                <motion.div
                  className="relative"
                  animate={{
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 2
                  }}
                >
                  <div className="w-2 h-2 bg-orange-400/60 rounded-full"></div>
                  <motion.div
                    className="absolute -top-4 -left-2 text-xs text-orange-400/50"
                    animate={{
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 2.2
                    }}
                  >
                    Build
                  </motion.div>
                </motion.div>

                {/* Deploy stage */}
                <motion.div
                  className="relative"
                  animate={{
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 3
                  }}
                >
                  <div className="w-2 h-2 bg-green-400/60 rounded-full"></div>
                  <motion.div
                    className="absolute -top-4 -left-2 text-xs text-green-400/50"
                    animate={{
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 3.2
                    }}
                  >
                    Deploy
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* API Development Animation - Top Center */}
          <motion.div
            className="absolute"
            style={{ display: 'none' }}
          >
            {/* API Icon */}
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            >
              <div className="w-4 h-4 border border-purple-400/60 rounded flex items-center justify-center">
                <div className="text-xs text-purple-400/60 font-bold">API</div>
              </div>

              {/* Data flow */}
              <motion.div
                className="absolute -right-8 top-1/2 transform -translate-y-1/2"
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1
                }}
              >
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-purple-400/60 rounded-full"></div>
                  <div className="w-1 h-1 bg-purple-400/60 rounded-full"></div>
                  <div className="w-1 h-1 bg-purple-400/60 rounded-full"></div>
                </div>
              </motion.div>

              {/* Response */}
              <motion.div
                className="absolute -right-16 -top-2"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 2
                }}
              >
                <div className="bg-green-100/60 px-2 py-1 rounded text-xs text-green-600/80 font-mono">
                  200 OK
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Cloud Deployment Animation - Bottom Left */}
          <motion.div
            className="absolute"
            style={{ display: 'none' }}
          >
            {/* Cloud Icon */}
            <motion.div
              className="relative"
              animate={{
                y: [-3, 3, -3],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="24" height="16" viewBox="0 0 24 16" className="text-blue-400/60">
                <path
                  fill="currentColor"
                  d="M19 8c1.1 0 2-.9 2-2s-.9-2-2-2c0-2.2-1.8-4-4-4-1.5 0-2.8.8-3.5 2C10.3 1.4 9 2.5 9 4c-1.7 0-3 1.3-3 3s1.3 3 3 3h10z"
                />
              </svg>

              {/* Upload animation */}
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                animate={{
                  y: [5, -5, 5],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <div className="text-xs text-blue-400/60">↑</div>
              </motion.div>

              {/* Status indicator */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                animate={{
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5
                }}
              >
                <div className="text-xs text-green-400/50 font-mono">Live</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Geometric Shapes - Adjusted positions to avoid borders */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-24 w-24 h-24 bg-primary-100 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-20 w-20 h-20 bg-secondary-200 rounded-lg opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary-300 rounded-full"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-4 sm:py-8 space-y-12">
        {/* Centered Title Section */}


        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Enhanced Badge - Left Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "backOut" }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-primary-50 text-primary-700 rounded-full text-sm font-semibold border border-primary-200 shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={18} className="mr-3" />
              </motion.div>
              <AnimatedText text="Over 25 Years of Excellence" delay={0.5} />
            </motion.div>
          </div>

          {/* Right Column Placeholder */}
          <div></div>

          {/* Enhanced Main Title - Spans Full Width Below Badge */}
          <div className="lg:col-span-2 w-full text-center space-y-2">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={titleControls}
              className="font-outfit text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.1] w-full text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative inline-block"
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Excellence in
                </span>
                <motion.div
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                />
              </motion.div>
              <br />
              <span className="whitespace-nowrap">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent"
                >
                  Healthcare
                </motion.span>
                <span className="text-gray-400 mx-3">&</span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                  className="bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent"
                >
                  Technology
                </motion.span>
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-gray-700"
              >
                Solutions
              </motion.span>
            </motion.h1>
          </div>

          {/* Enhanced Content - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 lg:space-y-10 lg:pr-8"
          >
            <div className="space-y-6">
              {/* Enhanced Description with Typewriter Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={subtitleControls}
                className="space-y-6"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-medium"
                >
                  Empowering businesses with comprehensive{' '}
                  <motion.span
                    initial={{ backgroundColor: "transparent" }}
                    animate={{ backgroundColor: ["transparent", "#e0f2fe", "transparent"] }}
                    transition={{ delay: 2, duration: 2, repeat: Infinity }}
                    className="px-2 py-1 rounded font-semibold text-blue-700"
                  >
                    Healthcare KPO Services
                  </motion.span>{' '}
                  and cutting-edge{' '}
                  <motion.span
                    initial={{ backgroundColor: "transparent" }}
                    animate={{ backgroundColor: ["transparent", "#fdf4ff", "transparent"] }}
                    transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
                    className="px-2 py-1 rounded font-semibold text-purple-700"
                  >
                    Software Development
                  </motion.span>
                </motion.p>

                {/* Domain Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-none sm:max-w-3xl"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                        <Heart className="text-white" size={20} />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-blue-900">Healthcare & Medical</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-blue-700 leading-relaxed mb-3">
                      Medical transcription, billing, record summarization, medical scribe, APS & peer review, EHR/EMR support.
                    </p>
                    <div className="flex items-center space-x-2">
                      <Shield size={14} className="text-green-600" />
                      <span className="text-xs font-semibold text-green-700">99.8% Accuracy</span>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl border border-purple-100 hover:border-purple-200 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                        <Brain className="text-white" size={20} />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-purple-900">Technology & Software</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-purple-700 leading-relaxed mb-3">
                      Cloud solutions, software services, talent management, AI/ML, mobile solutions, remote hardware, analytics & reporting.
                    </p>
                    <div className="flex items-center space-x-2">
                      <Code size={14} className="text-purple-600" />
                      <span className="text-xs font-semibold text-purple-700">100+ Projects</span>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.8 }}
                  className="text-lg text-gray-500 leading-relaxed max-w-2xl"
                >
                  Trusted by{' '}
                  <motion.span
                    animate={{ color: ["#6b7280", "#0ea5e9", "#6b7280"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="font-bold"
                  >
                    50+ healthcare providers
                  </motion.span>{' '}
                  and{' '}
                  <motion.span
                    animate={{ color: ["#6b7280", "#9333ea", "#6b7280"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="font-bold"
                  >
                    100+ technology companies
                  </motion.span>{' '}
                  across{' '}
                  <motion.span
                    animate={{ color: ["#6b7280", "#059669", "#6b7280"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="font-bold"
                  >
                    8 countries
                  </motion.span>
                  .
                </motion.p>
              </motion.div>
            </div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-none"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/medical"
                  className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-full sm:w-auto"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 flex items-center gap-2 text-center justify-center">
                    <Stethoscope size={16} className="sm:w-5 sm:h-5" />
                    <span className="hidden xs:inline">Healthcare</span>
                    <span className="hidden sm:inline"> Services</span>
                    <span className="xs:hidden">Care</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                    </motion.div>
                  </span>

                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/technology"
                  className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-full sm:w-auto"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 flex items-center gap-2 text-center justify-center">
                    <Code size={16} className="sm:w-5 sm:h-5" />
                    <span className="hidden xs:inline">Technology</span>
                    <span className="hidden sm:inline"> Solutions</span>
                    <span className="xs:hidden">Tech</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    >
                      <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                    </motion.div>
                  </span>

                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.5 }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 pt-6 sm:pt-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3.4, type: "spring", stiffness: 200 }}
                className="group flex items-center space-x-2 sm:space-x-3 bg-green-50 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-green-200 hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Shield className="text-green-600 group-hover:text-green-700" size={16} />
                </motion.div>
                <span className="text-xs sm:text-sm font-semibold text-green-700 group-hover:text-green-800">
                  HIPAA Compliant
                </span>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3.6, type: "spring", stiffness: 200 }}
                className="group flex items-center space-x-2 sm:space-x-3 bg-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Globe className="text-blue-600 group-hover:text-blue-700" size={16} />
                </motion.div>
                <span className="text-xs sm:text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                  Global Reach
                </span>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3.8, type: "spring", stiffness: 200 }}
                className="group flex items-center space-x-2 sm:space-x-3 bg-purple-50 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-purple-200 hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Award className="text-purple-600 group-hover:text-purple-700" size={16} />
                </motion.div>
                <span className="text-xs sm:text-sm font-semibold text-purple-700 group-hover:text-purple-800">
                  25+ Years
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "backOut" }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "backOut" }}
            className="relative perspective-1000 mt-12 lg:mt-0 px-4 lg:px-8"
          >
            <div className="relative">
              {/* Dual Domain Showcase Cards */}
              <div className="space-y-6">
                {/* Healthcare Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                  }}
                  className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl shadow-xl p-6 border border-blue-100 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg"
                      >
                        <Heart className="text-white" size={20} />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg text-blue-900">Healthcare KPO</h3>
                        <p className="text-sm text-blue-600">HIPAA Compliant Services</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold"
                    >
                      99.8% Accuracy
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {['Medical Transcription', 'Medical Billing', 'Medical Scribe', 'Record Summarization', 'APS Summary', 'Peer Review', 'EHR/EMR'].map((service, idx) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + idx * 0.1, duration: 0.4 }}
                        className="bg-blue-100 px-3 py-2 rounded-lg text-center"
                      >
                        <span className="text-xs font-semibold text-blue-700">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Technology Card */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)"
                  }}
                  className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl shadow-xl p-6 border border-purple-100 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{
                          rotate: [0, 180, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg"
                      >
                        <Brain className="text-white" size={20} />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg text-purple-900">Technology Solutions</h3>
                        <p className="text-sm text-purple-600">Software & Cloud Services</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold"
                    >
                      100+ Projects
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {['Cloud Solutions', 'Software Services', 'Talent Management', 'AI/ML Solutions', 'Mobile Solutions', 'Remote Hardware', 'Analytics & Reporting'].map((service, idx) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.9 + idx * 0.1, duration: 0.4 }}
                        className="bg-purple-100 px-3 py-2 rounded-lg text-center"
                      >
                        <span className="text-xs font-semibold text-purple-700">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Floating Cards - Adjusted positions */}
              <motion.div
                initial={{ opacity: 0, scale: 0, y: -50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                className="absolute -top-8 -right-4 sm:-top-4 sm:-right-4"
              >
                <motion.div
                  animate={{
                    y: [-8, 8, -8],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-3 rounded-xl shadow-lg border-2 border-white"
                >
                  <motion.div
                    className="text-lg font-black mb-0.5"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    25+
                  </motion.div>
                  <div className="text-[10px] opacity-90 font-medium">Years</div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 -left-4"
              >
                <motion.div
                  animate={{
                    y: [8, -8, 8],
                    rotate: [2, -2, 2]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="bg-white border-2 border-primary-200 p-3 rounded-xl shadow-lg"
                >
                  <motion.div
                    className="text-lg font-black text-primary-600 mb-0.5"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    150+
                  </motion.div>
                  <div className="text-[10px] text-gray-600 font-medium">Employees</div>
                </motion.div>
              </motion.div>

              {/* Additional Floating Elements - Repositioned */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6, type: "spring" }}
                className="absolute top-20 -left-6"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <motion.span
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="text-white font-bold text-sm"
                  >
                    ✦
                  </motion.span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3, type: "spring" }}
                className="absolute bottom-24 right-6"
              >
                <motion.div
                  animate={{
                    y: [-8, 8, -8],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-7 h-7 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center shadow-lg"
                >
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white text-xs font-bold"
                  >
                    ⚡
                  </motion.span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero