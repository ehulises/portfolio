import React from "react";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import { Project } from "@/data/portfolio-data";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card variant="elevated" padding="lg" hoverable>
      <CardHeader>
        {/* Project Image Placeholder */}
        <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 flex items-center justify-center">
          <div className="text-primary-600 font-medium">Project Image</div>
        </div>

        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          {project.title}
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-neutral-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex space-x-3 w-full">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="primary" size="sm" className="w-full">
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </Button>
            </Link>
          )}

          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="outline" size="sm" className="w-full">
                <Github size={16} className="mr-2" />
                Code
              </Button>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
