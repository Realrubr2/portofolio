"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

// Default projects data as fallback
const defaultProjects = [
  {
    title: "Watkijkenwe",
    description:
      "A full-stack e-commerce platform built with Next.js, Tailwind CSS, and Stripe for payments.",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
  },
  {
    title: "Task Management App",
    description:
      "A productivity app that helps users manage their daily tasks and projects.",
    tags: ["React", "Firebase", "Material UI"],
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that displays current and forecasted weather data.",
    tags: ["JavaScript", "OpenWeather API", "Chart.js"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
];
export function ProjectsSection() {
  const { t, language, translations } = useLanguage();

  let projects = [];

  try {
    const projectsFromTranslations = translations[language]?.projects?.projects;
    if (Array.isArray(projectsFromTranslations)) {
      projects = projectsFromTranslations;
    } else {
      projects = defaultProjects;
    }
  } catch (error) {
    projects = defaultProjects;
  }

  return (
    <section id="projects" className="w-full py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            {t("projects.title")}
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="text-muted-foreground max-w-2xl">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, tagIndex: Key | null | undefined) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-muted px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>

              <CardFooter className="flex justify-between">
                {project.github && (

                  <Button asChild variant="outline" size="sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                    >
                    <Github className="h-4 w-4" />
                    <span>{t("projects.codeButton")}</span>
                  </a>
                </Button>
                  )}
                {project.liveDemo && (
                  <Button asChild size="sm">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <span>{t("projects.demoButton")}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
