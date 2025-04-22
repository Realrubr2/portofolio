"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "nl"
type Translations = Record<string, any>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("nl")
  const [translations, setTranslations] = useState<Translations>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if there's a saved language preference in localStorage
    const savedLanguage = typeof window !== "undefined" ? (localStorage.getItem("language") as Language) : null
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "nl")) {
      setLanguage(savedLanguage)
    }

    // Default translations to use if fetching fails
    const defaultTranslations = {
      en: {
        header: {
          home: "Home",
          about: "About",
          projects: "Projects",
          skills: "Skills",
          contact: "Contact",
        },
        // Add minimal required translations for basic functionality
        hero: {
          title: "John Doe",
          subtitle: "Software Developer",
          description: "I build exceptional and accessible digital experiences for the web.",
          linkedinButton: "View LinkedIn",
          contactButton: "Contact Me",
          scrollDown: "Scroll Down",
        },
        languageSwitcher: {
          language: "Language",
        },
      },
      nl: {
        header: {
          home: "Home",
          about: "Over Mij",
          projects: "Projecten",
          skills: "Vaardigheden",
          contact: "Contact",
        },
        hero: {
          title: "John Doe",
          subtitle: "Software Ontwikkelaar",
          description: "Ik bouw uitzonderlijke en toegankelijke digitale ervaringen voor het web.",
          linkedinButton: "Bekijk LinkedIn",
          contactButton: "Neem Contact Op",
          scrollDown: "Scroll Omlaag",
        },
        languageSwitcher: {
          language: "Taal",
        },
      },
    }

    // Try to load translations
    fetch("/api/translations")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        setTranslations(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Failed to load translations:", error)
        // Use default translations as fallback
        setTranslations(defaultTranslations)
        setIsLoading(false)
      })
  }, [])

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    if (isLoading || !translations[language]) {
      // Return empty string during loading or if translations aren't available
      return ""
    }

    // Split the key by dots to access nested properties
    const keys = key.split(".")
    let value = translations[language]

    // Navigate through the nested properties
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // If key not found, try to use English as fallback
        if (language !== "en" && translations["en"]) {
          let fallbackValue = translations["en"]
          let fallbackFound = true

          // Try to find the key in English translations
          for (const fallbackKey of keys) {
            if (fallbackValue && typeof fallbackValue === "object" && fallbackKey in fallbackValue) {
              fallbackValue = fallbackValue[fallbackKey]
            } else {
              fallbackFound = false
              break
            }
          }

          if (fallbackFound && typeof fallbackValue !== "object") {
            return fallbackValue
          }
        }

        // If no fallback found, return the key as is
        return key
      }
    }

    // If the value is an object, return the key as fallback
    if (typeof value === "object") {
      return key
    }

    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
      {!isLoading && children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
