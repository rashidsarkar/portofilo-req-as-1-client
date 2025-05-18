"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Info } from 'lucide-react';
import projectsData from '@/data/projects.json';
import { motion } from 'framer-motion';

export default function Projects() {
  const { projects } = projectsData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-white rounded-2xl shadow-sm">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 ">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of my recent work and personal projects that showcase my skills and expertise.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.overview}</p>

                <div className="mb-4">
                  <h3 className="font-medium mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {[...project.technologies.frontend, ...project.technologies.backend, project.technologies.database].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center flex-wrap gap-3">
                  <span className="text-sm text-gray-500">
                    {project.createdAt}
                  </span>
                  <div className="flex gap-3">
                    {project.links.liveDemo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors text-sm"
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
                        <Button
                          className="border border-primary text-primary hover:bg-primary/10 text-sm inline-flex items-center gap-2"
                        >
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
          className="text-center mt-12"
        >
          <div className="w-full flex justify-center">
            <Link href="/projects" className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-primary hover:bg-primary-hover text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 max-w-fit">
                  View All
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
