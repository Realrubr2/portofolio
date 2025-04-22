"use client"

import { useState, useEffect, type ReactNode } from "react"
import { LanguageProvider } from "@/context/language-context"

export function LanguageProviderWrapper({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    // Return a simple loading state or nothing during SSR
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return <LanguageProvider>{children}</LanguageProvider>
}
