import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: personalInfo.githubUrl,
      icon: Github,
      label: "GitHub",
    },
    {
      href: personalInfo.linkedinUrl,
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Name and copyright */}
          <div className="text-center md:text-left">
            <p className="text-neutral-900 font-semibold">
              {personalInfo.name}
            </p>
            <p className="text-neutral-600 text-sm mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Right side - Social links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-neutral-600 hover:text-primary-600 transition-colors"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom - Quick navigation */}
        <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
          <div className="flex flex-wrap justify-center space-x-6 text-sm">
            <Link
              href="/"
              className="text-neutral-600 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-neutral-600 hover:text-primary-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-neutral-600 hover:text-primary-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
