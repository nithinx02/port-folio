"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            
            className="text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm <span className="text-blue-500">Nithin E</span>
              <br />
              <span className="text-purple-500">Web Designer</span> &
              <br />
              <span className="text-blue-500">Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              I create stunning web experiences with modern technologies. Specializing in responsive design and
              interactive user interfaces.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
                  <Link href="#projects">
                    View My Work
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6113221161035.jpg-62nZlNui6hGaEg38Dn0vMkNt6hAY9G.jpeg"
              alt="Nithin E"
              fill
              className="object-cover rounded-full border-4 border-white/10"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

