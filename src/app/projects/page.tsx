"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Info } from 'lucide-react';
import { useEffect, useState } from 'react';

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

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/project');
        const data = await response.json();
        setProjects(data.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            My Projects
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing my skills and experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.overview}</p>

                <div className="mb-4">
                  <h3 className="font-medium mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      ...project.frontendTech,
                      ...project.backendTech,
                      project.databaseTech
                    ].map((tech, index) => (
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
                  <div className="flex gap-3">
                    {project.liveDemoLink && (
                      <a
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors text-sm"
                      >
                        Live Link
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
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