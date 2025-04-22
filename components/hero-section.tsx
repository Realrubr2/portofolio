"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0" />
      <div className="container flex flex-col items-center text-center z-10 space-y-8 max-w-3xl">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
          <Image src="/profiel-foto.png?height=128&width=128" alt="Profile" fill className="object-cover" />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="text-primary">{t("hero.title")}</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">{t("hero.subtitle")}</h2>

        <p className="text-lg text-muted-foreground max-w-2xl">{t("hero.description")}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="rounded-full">
            <a href="https://www.linkedin.com/in/ramon-iroomo-167117322/" target="_blank" rel="noopener noreferrer">
              {t("hero.linkedinButton")}
            </a>
          </Button>
        </div>

        <Link
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">{t("hero.scrollDown")}</span>
          <ArrowDown className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
