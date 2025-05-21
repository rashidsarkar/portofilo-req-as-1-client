"use client";

import { motion } from 'framer-motion';
import { 
  Code2, Database, Server, GraduationCap, MapPin, Mail, 
  Briefcase, Globe, Terminal, Palette, GitBranch, Monitor, 
  Layers, Zap, Cpu, FileCode, Layout, Package, Boxes
} from 'lucide-react';
import Image from 'next/image';
import { useSkills } from '@/hooks/useSkills';
import { useState, useEffect } from 'react';

interface AboutData {
  name: string;
  role: string;
  bio: string;
  experience: string;
  location: string;
  email: string;
  education: string;
  
}

export default function About() {
  const [about, setAbout] = useState<AboutData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { skillCategories, getSkillsByCategory } = useSkills();

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/about/');
        if (!response.ok) {
          throw new Error('Failed to fetch about data');
        }
        const data = await response.json();
        console.log(data?.data[0]);
        setAbout(data.data[0]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAbout();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const getSkillIcon = (skill: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'React.js': <Code2 />,
      'Next.js': <Layers />,
      'TypeScript': <FileCode />,
      'Tailwind CSS': <Palette />,
      'Redux': <Boxes />,
      'Node.js': <Terminal />,
      'Express.js': <Server />,
      'MongoDB': <Database />,
      'Firebase': <Zap />,
      'REST APIs': <Globe />,
      'Git': <GitBranch />,
      'VS Code': <Monitor />,
      'Figma': <Layout />,
      'Postman': <Package />,
      'Docker': <Cpu />
    };
    return iconMap[skill] || <Code2 />;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !about) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error: {error || 'Failed to load data'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Background */}
      <div className="relative h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://i.ibb.co/9mMpzMxV/Pngtree-black-high-end-atmospheric-tech-poster-1044312.jpg"
            alt="Technology Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="https://i.ibb.co/DkxszhN/myImg.png"
                  alt={about.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <h1 className="text-5xl font-bold mb-4 text-white">
              {about.name}
            </h1>
            <p className="text-xl text-white/90 mb-4">{about.role}</p>
            <p className="text-white/90 max-w-2xl mx-auto">
              {about.bio}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 -mt-20 relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4"
            >
              <Briefcase className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <p className="text-gray-600">{about.experience}</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mb-4"
            >
              <MapPin className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-600">{about.location}</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-4"
            >
              <Mail className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">{about.email}</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-4"
            >
              <GraduationCap className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <p className="text-gray-600">{about.education}</p>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className={`${category.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}
              >
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    category.id === 'frontend' ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                    category.id === 'backend' ? 'bg-gradient-to-r from-green-500 to-teal-500' :
                    category.id === 'database' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                    'bg-gradient-to-r from-orange-500 to-red-500'
                  }`}
                >
                  {category.id === 'frontend' ? <Code2 className="w-6 h-6 text-white" /> :
                   category.id === 'backend' ? <Server className="w-6 h-6 text-white" /> :
                   category.id === 'database' ? <Database className="w-6 h-6 text-white" /> :
                   <Package className="w-6 h-6 text-white" />}
                </motion.div>
                <h3 className={`text-xl font-semibold mb-2 ${category.color}`}>{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {getSkillsByCategory(category.id).map((skill) => (
                    <motion.div
                      key={skill.id}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/80 hover:bg-white transition-colors"
                    >
                      {getSkillIcon(skill.name)}
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 