"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Info } from 'lucide-react';
import projectsData from "@/data/projects.json";
import { Project } from "@/lib/types";

export default function ProjectsPage() {
  const { projects } = projectsData;

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 ">
            My Projects
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing my skills and experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              data-aos="fade-up"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.overview}</p>

                <div className="mb-4">
                  <h3 className="font-medium mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.frontend.map((tech, index) => (
                      <span
                        key={`${tech}-${index}`}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center flex-wrap gap-3">
                  <span className="text-sm text-gray-500">
                    {new Date(project.createdAt).toLocaleDateString()}
                  </span>
                  <div className="flex gap-3">
                    <a
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors text-sm"
                    >
                      Live Link
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link href={`/projects/${project.id}`}>
                      <Button className="border border-primary text-primary hover:bg-primary/10 text-sm inline-flex items-center gap-2">
                        View Details
                        <Info className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 