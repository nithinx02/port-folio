"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

const projects = [
  {
    id: "brain-tumor",
    name: "Brain Tumor Detection",
    description: "AI-powered brain tumor detection system using deep learning and image processing",
    image: "/brain-tumor.jpg",
    github: "https://github.com/NITHIN9022/Brain-Tumor-",
    technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    stars: 15,
    forks: 5,
    longDescription: "Advanced brain tumor detection system that utilizes deep learning algorithms...",
    features: ["Real-time tumor detection", "High accuracy prediction", "MRI scan analysis", "Detailed reporting"],
  },
  {
    id: "money-crafter",
    name: "Money Crafter",
    description: "Financial management and budgeting application",
    image: "/money-crafter.jpg",
    github: "https://github.com/NITHIN9022/money-crafter",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    stars: 20,
    forks: 8,
    longDescription:
      "Comprehensive financial management tool that helps users track expenses, create budgets, and visualize their spending patterns.",
    features: ["Expense tracking", "Budgeting", "Spending visualization", "Financial reporting"],
  },
  {
    id: "herb-vista",
    name: "Herb Vista",
    description: "E-commerce platform for herbal products",
    image: "/herb-vista.jpg",
    github: "https://github.com/NITHIN9022/herb-vista",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    stars: 25,
    forks: 10,
    longDescription:
      "Modern e-commerce platform specialized in herbal products with advanced filtering, search, and shopping cart functionality.",
    features: ["Product catalog", "Shopping cart", "Order management", "User accounts"],
  },
]

export default function Projects() {
  const router = useRouter()
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute inset-0 bg-[url('/grid.svg')] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                layoutId={`project-${project.id}`}
                className="relative h-[300px] rounded-lg overflow-hidden cursor-pointer group"
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => router.push(`/projects/${project.id}`)}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  className="absolute inset-0 p-6 flex flex-col justify-end"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-white/80 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white/10 hover:bg-white/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-white/80">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stars}
                    </div>
                    <div className="flex items-center text-white/80">
                      <GitFork className="w-4 h-4 mr-1" />
                      {project.forks}
                    </div>
                    <Link
                      href={project.github}
                      target="_blank"
                      className="ml-auto text-white/80 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

