import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { personalInfo } from "@/data/portfolio-data";

export const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: "Send me an email",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ehulises",
      href: personalInfo.githubUrl,
      description: "Check out my code",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: personalInfo.linkedinUrl,
      description: "Let's connect professionally",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-primary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method) => (
            <Link
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card variant="elevated" padding="lg" hoverable>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="inline-flex p-4 bg-primary-100 rounded-full">
                      <method.icon size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        {method.label}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-2">
                        {method.description}
                      </p>
                      <p className="text-primary-600 font-medium">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Card variant="bordered" padding="lg" className="inline-block">
            <CardContent>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Ready to start a project?
              </h3>
              <p className="text-neutral-600 mb-6">
                I'm currently available for new opportunities and
                collaborations.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Get In Touch
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
