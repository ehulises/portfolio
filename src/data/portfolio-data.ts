// Personal Information
export const personalInfo = {
  name: "Ehulises Rodriguez",
  title: "Frontend Developer",
  email: "your-email@example.com", // Replace with your actual email
  location: "Your Location", // Replace with your location
  bio: "Passionate frontend developer creating modern web experiences with React, Next.js, and TypeScript.",
  githubUrl: "https://github.com/ehulises",
  linkedinUrl: "https://linkedin.com/in/your-profile", // Replace with your LinkedIn
};

// Project Interface
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

// Sample Projects Data
export const projects: Project[] = [
  {
    id: "1",
    title: "Sample Project 1",
    description:
      "Description of your first project. What problem did it solve? What technologies did you use?",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ehulises/project1",
    featured: true,
  },
  // Add more projects later
];

// Skills Data
export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
  // Add your actual skills
];
