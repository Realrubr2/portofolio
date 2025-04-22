"use client"

import { useLanguage } from "@/context/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="w-full py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{t("about.title")}</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">{t("about.paragraph1")}</p>

          <p className="text-lg leading-relaxed mb-6">{t("about.paragraph2")}</p>

          <p className="text-lg leading-relaxed">{t("about.paragraph3")}</p>
        </div>
      </div>
    </section>
  )
}
