"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowLeft, Code2, Database, Server, Github } from 'lucide-react';
import { useParams } from 'next/navigation';
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
  clientRepoLink: string;
  serverRepoLink: string;
}

export default function ProjectDetails() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/project/${params.id}`);
        const data = await response.json();
        setProject(data.data);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params.id]);
console.log(project);
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1>Project not found</h1>
        <Link href="/projects">
          <Button>Back to Projects</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <Link href="/projects" className="inline-block mb-8">
        <Button className="flex items-center gap-2 bg-transparent hover:bg-gray-100">
          <ArrowLeft className="w-4 h-4 text-primary" />
          Back to Projects
        </Button>
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-[400px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-600 mb-6">
                {project.overview}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">Frontend Technologies:</span>
                  <span className="text-gray-600">{project.frontendTech.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-500">
                    <Server className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">Backend Technologies:</span>
                  <span className="text-gray-600">{project.backendTech.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">Database:</span>
                  <span className="text-gray-600">{project.databaseTech}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Links</h2>
              <div className="space-y-4">
              <div className="space-y-4">
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.clientRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <span>Client Repository</span>
                </a>
                <a
                  href={project.serverRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <span>Server Repository</span>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 