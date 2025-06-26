import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo, skills } from "@/data/portfolio-data";

export default function AboutPage() {
  const experience = [
    {
      title: "Frontend Developer",
      company: "Your Company",
      period: "2023 - Present",
      description:
        "Developing modern web applications using React, Next.js, and TypeScript.",
    },
    {
      title: "Junior Developer",
      company: "Previous Company",
      period: "2022 - 2023",
      description:
        "Built responsive websites and learned best practices in web development.",
    },
  ];

  const education = [
    {
      degree: "Your Degree",
      school: "Your School",
      period: "2020 - 2022",
      description: "Relevant coursework and achievements.",
    },
  ];

  return (
    <main className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        <div className="space-y-16">
          {/* Personal Story */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              My Story
            </h2>
            <Card variant="bordered" padding="lg">
              <CardContent>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  My journey into web development began with a curiosity about
                  how websites work. What started as a hobby quickly became a
                  passion as I discovered the creative possibilities of
                  combining code with design.
                </p>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  I love the challenge of turning complex problems into simple,
                  intuitive solutions. Whether it's optimizing performance,
                  improving accessibility, or creating seamless user
                  experiences, I'm always looking for ways to make the web
                  better.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or
                  learning about the latest trends in web development.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} variant="bordered" padding="lg">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900">
                          {job.title}
                        </h3>
                        <p className="text-primary-600 font-medium">
                          {job.company}
                        </p>
                      </div>
                      <Badge variant="secondary" className="mt-2 sm:mt-0">
                        {job.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} variant="bordered" padding="lg">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900">
                          {edu.degree}
                        </h3>
                        <p className="text-primary-600 font-medium">
                          {edu.school}
                        </p>
                      </div>
                      <Badge variant="secondary" className="mt-2 sm:mt-0">
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Skills & Technologies
            </h2>
            <Card variant="bordered" padding="lg">
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="primary" size="md">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}
