"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ArrowLeft, Star, GitFork, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import type { Project } from "@/types/project"
import { getProjectData } from "@/lib/projects"

export default function ProjectPage() {
  const { id } = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProject() {
      setLoading(true)
      const projectData = await getProjectData(id as string)
      if (projectData) {
        setProject(projectData)
      } else {
        router.push("/#projects")
      }
      setLoading(false)
    }
    fetchProject()
  }, [id, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!project) return null

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/#projects" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
              <p className="text-muted-foreground mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>{project.stars} stars</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitFork className="w-5 h-5" />
                  <span>{project.forks} forks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  <span>{project.watchers} watching</span>
                </div>
              </div>

              <Button asChild>
                <Link href={project.github} target="_blank">
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-muted-foreground whitespace-pre-line">{project.longDescription}</p>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="md:col-span-2"
          >
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Implementation Details</h2>
              <ul className="space-y-2">
                {project.implementation.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

