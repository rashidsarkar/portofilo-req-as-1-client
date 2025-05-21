"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Package } from "lucide-react";
import { useSkills } from "@/hooks/useSkills";

const skillVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  const { isLoading, error, skillCategories, getSkillsByCategory } = useSkills();

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="w-48 h-8 mx-auto mb-4 bg-gray-200 rounded"></div>
              <div className="w-64 h-4 mx-auto bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center text-red-500">
            <p>Error: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A comprehensive overview of my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={skillVariants}
              initial="initial"
              animate="animate"
              className={`${category.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div
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
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${category.color}`}>{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="grid grid-cols-2 gap-3">
                {getSkillsByCategory(category.id).map((skill) => (
                  <motion.div
                    key={skill.id}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/80 hover:bg-white transition-colors"
                  >
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
