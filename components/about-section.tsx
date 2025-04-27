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

        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 max-w-5xl mx-auto">
          <div className="flex-1">
            <p className="text-lg leading-relaxed mb-6">{t("about.paragraph1")}</p>
            <p className="text-lg leading-relaxed mb-6">{t("about.paragraph2")}</p>
            <p className="text-lg leading-relaxed">{t("about.paragraph3")}</p>
          </div>
          <div className="flex-1 max-w-xs w-full bg-white/80 dark:bg-muted/60 rounded-lg shadow p-6 mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-4">{t("about.paragraph4")}</h3>
            <ul className="space-y-2 text-left">
              <li>
                <span className="font-medium">{t("about.thing1")}</span> {t("about.thing1-1")}
              </li>
              <li>
                <span className="font-medium">{t("about.thing2")}</span> {t("about.thing2-1")}
              </li>
              <li>
                <span className="font-medium">{t("about.thing3")}</span> {t("about.thing3-1")}
              </li>
              <li>
                <span className="font-medium">{t("about.thing4")}</span> {t("about.thing4-1")}
              </li>
              <li>
                <span className="font-medium">{t("about.thing5")}</span> {t("about.thing5-1")}
              </li>
              <li>
                <span className="font-medium">{t("about.thing6")}</span> {t("about.thing6-1")}
              </li>
              <li>
                <span className="font-medium">{t("about.thing7")}</span> {t("about.thing7-1")}
              </li>
              <li>
                <span className="font-medium">{t("about.thing8")}</span> {t("about.thing8-1")}
              </li>
              <li>
                <span className="font-medium">{t("about.thing9")}</span> {t("about.thing9-1")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
