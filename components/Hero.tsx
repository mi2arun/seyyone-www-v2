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
    <>
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
          {/* Zooming Circle - Hidden (uncomment lines 878-885 to enable) */}
          {/* <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary-300 rounded-full"
        /> */}
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-4 sm:py-8 space-y-12">
          {/* Centered Title Section */}


          <div className="space-y-12">
            {/* Enhanced Badge */}
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

            {/* Enhanced Main Title - Full Width */}
            <div className="w-full text-center space-y-2">
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

            {/* Enhanced Content - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8 lg:space-y-10"
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
                    className="py-1 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl font-medium"
                  >
                    Empowering businesses with comprehensive{' '}
                    <motion.span
                      initial={{ backgroundColor: "transparent" }}
                      animate={{ backgroundColor: ["transparent", "#e0f2fe", "transparent"] }}
                      transition={{ delay: 2, duration: 2, repeat: Infinity }}
                      className="py-1 rounded font-semibold text-blue-700"
                    >
                      Healthcare KPO Services
                    </motion.span>{' '}
                    and cutting-edge{' '}
                    <motion.span
                      initial={{ backgroundColor: "transparent" }}
                      animate={{ backgroundColor: ["transparent", "#fdf4ff", "transparent"] }}
                      transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
                      className="py-1 rounded font-semibold text-purple-700"
                    >
                      Software Development
                    </motion.span>
                  </motion.p>

                  {/* Domain Cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full"
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
                    className="text-lg text-gray-500 leading-relaxed max-w-4xl"
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
                      6 countries
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
                      <span className="hidden sm:inline"> Healthcare</span>
                      <span className="xs:hidden">KPO</span>
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
                      <span className="hidden xs:inline">Software</span>
                      <span className="hidden sm:inline"> Software</span>
                      <span className="xs:hidden">Solutions</span>
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

            {/* Service Showcase Cards - Full Width Below */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full pt-8"
            >
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {/* Healthcare Card */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
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
                    {[
                      { name: 'Medical Transcription', href: '/medical/medical-transcription' },
                      { name: 'Medical Billing', href: '/medical/medical-billing' },
                      { name: 'Medical Scribe', href: '/medical/medical-scribe' },
                      { name: 'Record Summarization', href: '/medical/medical-record-summarization' },
                      { name: 'APS Summary', href: '/medical/aps-summary' },
                      { name: 'Peer Review', href: '/medical/peer-review-summary' },
                      { name: 'EHR/EMR', href: '/medical/ehr-emr' }
                    ].map((service, idx) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                        className="bg-blue-100/50 hover:bg-blue-100 transition-colors rounded-lg text-center overflow-hidden"
                      >
                        <Link
                          href={service.href}
                          className="block px-3 py-2 w-full h-full"
                        >
                          <span className="text-xs font-semibold text-blue-700 block truncate hover:text-blue-800 transition-colors">
                            {service.name}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Technology Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
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
                    {[
                      { name: 'Cloud Solutions', href: '/technology/cloud-solutions' },
                      { name: 'Software Services', href: '/technology/software-services' },
                      { name: 'Talent Management', href: '/technology/talent-management' },
                      { name: 'AI/ML Solutions', href: '/technology/ai-ml-solutions' },
                      { name: 'Mobile Solutions', href: '/technology/mobile-solutions' },
                      { name: 'Remote Hardware', href: '/technology/remote-hardware-infra' },
                      { name: 'Analytics & Reporting', href: '/technology/analytics-reporting' }
                    ].map((service, idx) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                        className="bg-purple-100/50 hover:bg-purple-100 transition-colors rounded-lg text-center overflow-hidden"
                      >
                        <Link
                          href={service.href}
                          className="block px-3 py-2 w-full h-full"
                        >
                          <span className="text-xs font-semibold text-purple-700 block truncate hover:text-purple-800 transition-colors">
                            {service.name}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Our Clients & EMRs Section - Separate */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                Our Clients & EMRs
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Trusted by leading healthcare providers and integrated with major EMR systems
              </p>
            </div>

            {/* Marquee Container */}
            <div className="relative overflow-hidden py-4">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

              {/* Single Marquee Row - Right to Left */}
              <div className="flex space-x-8 animate-marquee">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex space-x-8 shrink-0">
                    {[
                      { name: 'Epic', img: 'https://seyyone.com/wp-content/themes/seyyone/assets/images/seyyone_clients/220px-Epic.png' },
                      { name: 'Salesforce', img: 'https://seyyone.com/wp-content/themes/seyyone/assets/images/seyyone_clients/salesforce.png' },
                      { name: 'Cerner', img: 'https://seyyone.com/wp-content/themes/seyyone/assets/images/seyyone_clients/220px-Cerner.png' },
                      { name: 'Meditech', img: 'https://seyyone.com/wp-content/themes/seyyone/assets/images/seyyone_clients/220px-Meditech.png' },
                      { name: 'Athenahealth', img: 'https://seyyone.com/wp-content/themes/seyyone/assets/images/seyyone_clients/220px-Athenahealth.png' },
                      { name: 'eClinicalWorks', img: 'https://seyyone.com/wp-content/themes/seyyone/assets/images/seyyone_clients/220px-eClinicalWorks.png' },
                      { name: 'NextGen', img: 'https://seyyone.com/wp-content/themes/seyyone/assets/images/seyyone_clients/220px-NextGen.png' },
                      { name: 'Allscripts', img: 'https://seyyone.com/wp-content/themes/seyyone/assets/images/seyyone_clients/220px-Allscripts.png' },
                      { name: 'DrChrono', img: 'https://seyyone.com/wp-content/themes/seyyone/assets/images/seyyone_clients/220px-DrChrono.png' },
                      { name: 'Practice Fusion', img: 'https://seyyone.com/wp-content/themes/seyyone/assets/images/seyyone_clients/220px-PracticeFusion.png' },
                      { name: 'Kareo', img: 'https://seyyone.com/wp-content/themes/seyyone/assets/images/seyyone_clients/220px-Kareo.png' },
                    ].map((client, idx) => (
                      <div
                        key={`${setIndex}-${idx}`}
                        className="flex items-center justify-center w-52 h-32 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5"
                      >
                        <img src={client.img} alt={client.name} className="max-w-full max-h-full object-contain" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Separate */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-0">
                What they said about us
              </h2>
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors text-sm"
              >
                View More
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  quote: "Thx for all of your help. You're a good teammate. I know that it has saved my practice and enjoyment of medicine.",
                  author: "Plastic Surgeon on the West Coast",
                  location: "USA"
                },
                {
                  quote: "We feel your company is trustworthy and would like to give you the business instead of looking elsewhere and thanks for keeping up a high standard.",
                  author: "Orthopedic Physician",
                  location: "Australia"
                },
                {
                  quote: "Thank you for continuing to do a wonderful job with our transcription! Great job! I'm impressed. Thank you so much! I'm excited that this transition is turning out to be easier than I was expecting.",
                  author: "Office Manager, Oregon Eye Clinic",
                  location: "USA"
                }
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 flex flex-col h-full hover:border-primary-500/50 transition-colors"
                >
                  <p className="text-gray-300 italic leading-relaxed flex-grow mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-gray-700 pt-4">
                    <h5 className="text-white font-semibold text-sm">{testimonial.author}</h5>
                    <p className="text-primary-400 text-sm">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Client Geographies Section */}
      <section className="bg-gray-900 py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Our Client Geographies
              </h2>
            </div>

            {/* Map - Desktop */}
            <div className="hidden md:block relative mb-8">
              <div className="relative h-[350px] overflow-hidden">
                <img
                  src="https://seyyone.com/wp-content/themes/seyyone/assets/images/contact/01.webp"
                  alt="World Map"
                  className="w-full h-auto max-h-[350px] object-contain"
                />

                {/* Map Tooltips */}
                {[
                  { name: 'United States', top: '35%', left: '28%' },
                  { name: 'Canada', top: '21%', left: '24%' },
                  { name: 'United Kingdom', top: '23%', left: '47%' },
                  { name: 'Ireland', top: '27%', left: '45%' },
                  { name: 'Germany', top: '28%', left: '50%' },
                  { name: 'Netherlands', top: '26%', left: '49%' },
                  { name: 'India', top: '48%', left: '60%' },
                  { name: 'Australia', top: '72%', left: '70%' },
                ].map((location, idx) => (
                  <motion.div
                    key={location.name}
                    className="absolute group"
                    style={{ top: location.top, left: location.left }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, type: "spring" }}
                  >
                    <div className="relative">
                      <span className="flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-500 border-2 border-white"></span>
                      </span>
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                        {location.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Countries List - Desktop */}
            <div className="hidden md:flex flex-wrap justify-center gap-4">
              {['USA', 'UK', 'Canada', 'Australia', 'Ireland', 'Germany', 'Netherlands', 'India'].map((country, idx) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-white font-medium text-sm px-4 py-2 bg-gray-800 rounded-lg"
                >
                  {country}
                </motion.div>
              ))}
            </div>

            {/* Countries Grid - Mobile */}
            <div className="md:hidden grid grid-cols-2 gap-3">
              {['USA', 'UK', 'Canada', 'Australia', 'Ireland', 'Germany', 'Netherlands', 'India'].map((country, idx) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gray-800 text-white text-center py-3 px-4 rounded-lg text-sm font-medium"
                >
                  {country}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </>
  )
}

export default Hero