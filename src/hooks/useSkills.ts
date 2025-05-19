import { useState, useEffect } from 'react';

interface Skill {
  id: string;
  name: string;
  category: "FRONTEND" | "BACKEND" | "DATABASE" | "TOOLS";
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  data: Skill[];
}

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  category: "FRONTEND" | "BACKEND" | "DATABASE" | "TOOLS";
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building modern and responsive user interfaces",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    category: "FRONTEND",
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Creating robust and scalable server-side applications",
    color: "text-green-600",
    bgColor: "bg-green-50",
    category: "BACKEND",
  },
  {
    id: "database",
    title: "Database & Storage",
    description: "Expertise in database management and data storage solutions",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    category: "DATABASE",
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    description: "Essential tools and technologies for development",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    category: "TOOLS",
  },
];

export const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/skill");
        if (!response.ok) {
          throw new Error("Failed to fetch skills data");
        }
        const responseData: ApiResponse = await response.json();
        setSkills(responseData.data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while fetching skills"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category.toLowerCase() === category.toLowerCase());
  };

  return {
    skills,
    isLoading,
    error,
    skillCategories,
    getSkillsByCategory
  };
}; 