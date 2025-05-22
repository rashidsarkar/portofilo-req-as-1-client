"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Info } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
  overview: string;
  image: string;
  frontendTech: string[];
  backendTech: string[];
  databaseTech: string;

  liveDemoLink: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://server-dashbord.vercel.app/api/project"
        );
        const data = await response.json();
        setProjects(data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-white shadow-sm rounded-2xl">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold ">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore some of my recent work and personal projects that showcase
            my skills and expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects?.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-xl"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-2 text-xl font-semibold">{project.title}</h2>
                <p className="mb-4 text-gray-600">{project.overview}</p>

                <div className="mb-4">
                  <h3 className="mb-2 font-medium">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      ...project.frontendTech,
                      ...project.backendTech,
                      project.databaseTech,
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex gap-3">
                    {project.liveDemoLink && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors border rounded-lg border-primary text-primary hover:bg-primary/10"
                      >
                        Live Link
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    )}
                    <Link href={`/projects/${project.id}`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="inline-flex items-center gap-2 text-sm border border-primary text-primary hover:bg-primary/10">
                          View Details
                          <Info className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="flex justify-center w-full">
            <Link href="/projects" className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="flex items-center gap-2 px-6 py-3 font-semibold text-black transition-all duration-300 rounded-lg shadow-lg bg-primary hover:bg-primary-hover hover:shadow-xl max-w-fit">
                  View All
                  <ArrowRight className="w-5 h-5 transition-transform transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
