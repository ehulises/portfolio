import React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader } from "../ui/card";
import { skills } from "@/data/portfolio-data";

export const SkillsSection: React.FC = () => {
  // Group skills by category for better organization
  const skillCategories = [
    {
      title: "Frontend",
      skills: skills.filter((skill) =>
        [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "HTML",
          "CSS",
          "Tailwind CSS",
        ].includes(skill)
      ),
    },
    {
      title: "Tools & Others",
      skills: skills.filter((skill) =>
        ["Git", "VS Code", "Figma", "npm", "Webpack"].includes(skill)
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} variant="bordered" padding="lg">
              <CardHeader>
                <h3 className="text-xl font-semibold text-neutral-900">
                  {category.title}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="primary" size="md">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All skills in a single row for mobile-friendly display */}
        <div className="mt-12">
          <Card variant="elevated" padding="lg">
            <CardHeader>
              <h3 className="text-xl font-semibold text-neutral-900 text-center">
                All Technologies
              </h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <Badge key={skill} variant="default" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
