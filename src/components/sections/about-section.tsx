import React from "react";
import { Card, CardContent } from "../ui/card";
import { personalInfo } from "@/data/portfolio-data";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives me
            as a developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary-300 rounded-full mx-auto mb-4"></div>
                <p className="text-primary-700 font-medium">Your Photo Here</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card variant="bordered" padding="lg">
              <CardContent>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  My Journey
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  I'm a passionate frontend developer with a love for creating
                  intuitive, responsive, and accessible web experiences. My
                  journey in web development started with curiosity about how
                  websites work, and has evolved into a deep appreciation for
                  clean code and user-centered design.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  learning about the latest trends in web development.
                </p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card variant="elevated" padding="md">
                <CardContent>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Location
                  </h4>
                  <p className="text-neutral-600">{personalInfo.location}</p>
                </CardContent>
              </Card>
              <Card variant="elevated" padding="md">
                <CardContent>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    Experience
                  </h4>
                  <p className="text-neutral-600">2+ Years</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
