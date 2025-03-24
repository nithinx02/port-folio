import type { Project } from "@/types/project"

export async function getProjectData(id: string): Promise<Project | null> {
  // In a real-world scenario, this would be an API call to fetch project data
  // For this example, we'll simulate an API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const projects: Record<string, Project> = {
    "brain-tumor": {
      id: "brain-tumor",
      name: "Brain Tumor Detection",
      description: "AI-powered brain tumor detection system using deep learning and image processing",
      image: "/brain-tumor.jpg",
      github: "https://github.com/NITHIN9022/Brain-Tumor-",
      technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
      stars: 15,
      forks: 5,
      watchers: 20,
      longDescription: `
        An advanced brain tumor detection system that leverages deep learning algorithms to analyze MRI scans
        and identify potential tumors with high accuracy. This project demonstrates the practical application
        of artificial intelligence in healthcare diagnostics.
      `,
      features: [
        "Real-time tumor detection and classification",
        "High accuracy prediction using deep learning models",
        "Comprehensive MRI scan analysis",
        "Detailed reporting and visualization",
        "User-friendly interface for medical professionals",
      ],
      implementation: [
        "Implemented using TensorFlow and Keras for deep learning",
        "Utilized transfer learning with pre-trained models",
        "Integrated OpenCV for image processing",
        "Developed custom data augmentation pipeline",
        "Created interactive visualization tools",
      ],
    },
    "money-crafter": {
      id: "money-crafter",
      name: "Money Crafter",
      description: "Personal finance management application",
      image: "/money-crafter.jpg",
      github: "https://github.com/NITHIN9022/money-crafter",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      stars: 10,
      forks: 3,
      watchers: 15,
      longDescription: `
        Money Crafter is a comprehensive personal finance management application designed to help users
        take control of their financial lives. It provides intuitive tools for budgeting, expense tracking,
        and financial goal setting.
      `,
      features: [
        "Expense tracking with categorization",
        "Budget creation and management",
        "Financial goal setting and tracking",
        "Interactive charts and reports",
        "Bank account integration",
      ],
      implementation: [
        "Built with React for a responsive front-end",
        "Node.js and Express for the backend API",
        "MongoDB for flexible data storage",
        "Implemented JWT for secure authentication",
        "Used Chart.js for data visualization",
      ],
    },
    "herb-vista": {
      id: "herb-vista",
      name: "Herb Vista",
      description: "E-commerce platform for herbal products",
      image: "/herb-vista.jpg",
      github: "https://github.com/NITHIN9022/herb-vista",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      stars: 8,
      forks: 2,
      watchers: 12,
      longDescription: `
        Herb Vista is a modern e-commerce platform specializing in herbal products. It offers a seamless
        shopping experience with advanced search and filtering capabilities, secure checkout, and
        comprehensive product information.
      `,
      features: [
        "Product catalog with advanced filtering",
        "User accounts and profiles",
        "Secure payment integration",
        "Order tracking and history",
        "Admin dashboard for inventory management",
      ],
      implementation: [
        "Developed using Next.js for server-side rendering and SEO optimization",
        "TypeScript for type-safe development",
        "Tailwind CSS for responsive design",
        "Prisma ORM for database management",
        "Implemented Stripe for payment processing",
      ],
    },
  }

  return projects[id] || null
}

