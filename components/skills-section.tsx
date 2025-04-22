"use client"

import Image from "next/image"
import { useLanguage } from "@/context/language-context"

// Skill categories with their respective skills
const skillCategories = [
  {
    key: "languages",
    skills: [
      { name: "TypeScript", image: "/images/skills/typescript.png" },
      { name: "JavaScript", image: "/images/skills/javascript.png" },
      { name: "Go", image: "/images/skills/Go.png" },
    ],
  },
  {
    key: "frameworks",
    skills: [
      { name: "Next.js", image: "/images/skills/Nextjs.png" },
      { name: "Lit.js", image: "/images/skills/lit-1.svg" },
      { name: "Angular", image: "/images/skills/angular.png" },
      { name: "Vite", image: "/images/skills/vite.png" },
      { name: "Node.js", image: "/images/skills/nodejs.png" },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "Docker", image: "/images/skills/docker.png" },
      { name: "Git", image: "/images/skills/git.png" },
      { name: "MySQL", image: "/images/skills/mysql.png" },
      { name: "Stripe", image: "/images/skills/stripe.png" },
    ],
  },
]

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="w-full py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{t("skills.title")}</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="text-muted-foreground max-w-2xl">{t("skills.subtitle")}</p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.key} className="space-y-6">
              <h3 className="text-xl font-semibold text-center">{t(`skills.categories.${category.key}`)}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 group">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-background shadow-sm border border-border p-3 transition-all duration-300 group-hover:text-primary group-hover:border-primary/20 group-hover:shadow-md">
                      <div className="relative w-full h-full">
                        <Image
                          src={skill.image || "/placeholder.svg"}
                          alt={skill.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
