"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter, Mail, Send, CheckCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    e.currentTarget.reset()

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="w-full py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{t("contact.title")}</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="text-muted-foreground max-w-2xl">{t("contact.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{t("contact.info.title")}</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.info.email")}</p>
                  <a href="mailto:hello@example.com" className="font-medium hover:text-primary transition-colors">
                    {t("contact.form.emailPlaceholder")}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.info.location")}</p>
                  <p className="font-medium">{t("contact.info.locationValue")}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{t("contact.social.title")}</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary hover:border-primary/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary hover:border-primary/20 transition-colors"
                >
                  {/* !TODO yeah yeah deprecated */}
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6 flex flex-col items-center justify-center text-center">
  <h3 className="text-xl font-semibold">{t("contact.form.title")}</h3>
  <p className="text-muted-foreground">{t("contact.form.whatsappPrompt")}</p>

  <Button
    asChild
    className="rounded-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-base"
  >
    <a
      href="https://wa.me/31639036595"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <Send className="w-4 h-4" />
      {t("contact.form.submitButton")}
    </a>
  </Button>
</div>

        </div>
      </div>
    </section>
  )
}
