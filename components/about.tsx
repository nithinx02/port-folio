"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-square">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20164211-FFUz8VJHorYIcKhSjfce6Ik59VWjPz.png"
              alt="Profile Image"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate Frontend Developer with a keen eye for design and a commitment to creating seamless
                user experiences. My journey in web development started with a curiosity for building interactive
                interfaces and has evolved into a professional pursuit of crafting elegant solutions.
              </p>
              <p>
                I specialize in building responsive web applications using modern technologies like React.js and
                Next.js. My experience includes working with various frontend frameworks and libraries, always staying
                up-to-date with the latest industry trends and best practices.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
                sharing my knowledge with the developer community.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

