"use client";

import { motion } from 'framer-motion';
import { 
  Code2, Database, Server, Users, GraduationCap, MapPin, Mail, 
  Briefcase, Globe, Terminal, Palette, GitBranch, Monitor, 
  Smartphone, Layers, Zap, Shield, Cpu, FileCode, 
  Layout, Package, GitPullRequest, Workflow, Boxes
} from 'lucide-react';
import projectsData from '@/data/projects.json';
import Image from 'next/image';

export default function About() {
  const { about } = projectsData;

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
    const iconMap: { [key: string]: any } = {
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
            <p className="text-gray-600">{about.education[0].degree}</p>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center ">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    index === 0 ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                    index === 1 ? 'bg-gradient-to-r from-green-500 to-teal-500' :
                    'bg-gradient-to-r from-yellow-500 to-orange-500'
                  }`}
                >
                  {index === 0 ? <Code2 className="w-6 h-6 text-white" /> :
                   index === 1 ? <Server className="w-6 h-6 text-white" /> :
                   <Database className="w-6 h-6 text-white" />}
                </motion.div>
                <h3 className="text-xl font-semibold mb-6">{skillGroup.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillGroup.items.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary/10 to-blue-600/10 flex items-center justify-center">
                        {getSkillIcon(skill)}
                      </div>
                      <span className="text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Interests & Hobbies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {about.interests.map((interest, index) => (
              <motion.div
                key={interest}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-blue-600/5 hover:from-primary/10 hover:to-blue-600/10 transition-all"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  index === 0 ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                  index === 1 ? 'bg-gradient-to-r from-green-500 to-teal-500' :
                  index === 2 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                  'bg-gradient-to-r from-pink-500 to-rose-500'
                }`}>
                  {index === 0 ? <Code2 className="w-5 h-5 text-white" /> :
                   index === 1 ? <Palette className="w-5 h-5 text-white" /> :
                   index === 2 ? <Workflow className="w-5 h-5 text-white" /> :
                   <GitPullRequest className="w-5 h-5 text-white" />}
                </div>
                <span className="font-medium">{interest}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 