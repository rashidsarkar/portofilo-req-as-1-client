"use client";

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiJavascript, SiGraphql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BiCodeAlt, BiServer } from "react-icons/bi";
import { FiCpu } from "react-icons/fi";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building modern and responsive user interfaces",
    icon: <BiCodeAlt className="w-6 h-6" />,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    skills: [
      { name: "React", icon: <FaReact className="w-6 h-6 text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-cyan-500" /> },
      { name: "Redux", icon: <SiRedux className="w-6 h-6 text-purple-500" /> },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating robust and scalable server-side applications",
    icon: <BiServer className="w-6 h-6" />,
    color: "text-green-500",
    bgColor: "bg-green-100",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-green-600" /> },
      { name: "Express", icon: <SiExpress className="w-6 h-6 text-black" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-700" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-blue-700" /> },
      { name: "Prisma", icon: <SiPrisma className="w-6 h-6 text-blue-900" /> },
      { name: "GraphQL", icon: <SiGraphql className="w-6 h-6 text-pink-600" /> },
    ],
  },
  {
    title: "Database & Storage",
    description: "Expertise in database management and data storage solutions",
    icon: <FaDatabase className="w-6 h-6" />,
    color: "text-emerald-500",
    bgColor: "bg-emerald-100",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-700" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-blue-700" /> },
      { name: "Mongoose", icon: <SiMongodb className="w-6 h-6 text-green-600" /> },
      { name: "Prisma", icon: <SiPrisma className="w-6 h-6 text-blue-900" /> },
    ],
  },
  {
    title: "Tools & Technologies",
    description: "Essential tools and technologies for development",
    icon: <FiCpu className="w-6 h-6" />,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-600" /> },
      { name: "Git", icon: <FaGitAlt className="w-6 h-6 text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="w-6 h-6 text-black" /> },
      { name: "REST APIs", icon: <TbApi className="w-6 h-6 text-green-600" /> },
      { name: "Docker", icon: <FaDocker className="w-6 h-6 text-blue-400" /> },
    ],
  },
];

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

const skillVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies I work with to build amazing digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`p-3 ${category.bgColor} rounded-xl ${category.color}`}
                >
                  {category.icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    variants={skillVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group/skill"
                  >
                    <motion.div 
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      className="p-2 bg-white rounded-lg shadow-sm"
                    >
                      {skill.icon}
                    </motion.div>
                    <span className="font-medium text-gray-700 group-hover/skill:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Tech Stack Overview</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skillCategories.flatMap(category => category.skills).map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex flex-col items-center gap-3">
                  <motion.div 
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    className="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300"
                  >
                    {skill.icon}
                  </motion.div>
                  <h4 className="text-center font-medium text-gray-800 group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}