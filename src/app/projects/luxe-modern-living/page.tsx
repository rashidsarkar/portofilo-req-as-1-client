"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowLeft, Code2, Database, Server, Users, Shield, Image as ImageIcon } from 'lucide-react';

export default function ProjectDetails() {
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
            src="/assets/project-images.png"
            alt="Luxe Modern Living"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">Luxe Modern Living</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-600 mb-6">
                A modern living platform built with MERN stack, featuring user
                authentication, property listings, and interactive features.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">Frontend Technologies:</span>
                  <span className="text-gray-600">React.js, Tailwind CSS, Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-500">
                    <Server className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">Backend Technologies:</span>
                  <span className="text-gray-600">Node.js, Express.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">Database:</span>
                  <span className="text-gray-600">MongoDB</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Links</h2>
              <div className="space-y-4">
                <a
                  href="https://stellar-malasada-952ea2.netlify.app/"
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
                  href="https://github.com/rashidsarkar/Luxe---Modern-Living-Platform---a12-p2.git"
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
                  href="https://github.com/rashidsarkar/Luxe---Modern-Living-Platform---a12-p2.git"
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

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span>User Authentication & Authorization</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span>Secure Login System</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                  <ImageIcon className="w-5 h-5 text-white" />
                </div>
                <span>Property Listings with Images</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <span>Data Management</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Login Credentials</h2>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
              <p className="mb-2"><span className="font-medium">Email:</span> demo@example.com</p>
              <p><span className="font-medium">Password:</span> demo123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 