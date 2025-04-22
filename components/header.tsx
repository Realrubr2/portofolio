"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="text-xl font-bold">
          Realrubr2
        </Link>

        <div className="flex items-center gap-2">
          <div className="bg-muted/80 px-2 py-1 rounded-md shadow-sm">
            <LanguageSwitcher />
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <nav
          className={`${
            isMenuOpen
              ? "flex flex-col absolute top-16 left-0 w-full bg-background shadow-md p-4 space-y-4"
              : "hidden"
          } md:flex md:space-x-4 md:static md:w-auto md:bg-transparent md:shadow-none md:p-0 md:space-y-0`}
        >
          <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors" onClick={handleNavClick}>
            {t("header.home")}
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors" onClick={handleNavClick}>
            {t("header.about")}
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors" onClick={handleNavClick}>
            {t("header.projects")}
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors" onClick={handleNavClick}>
            {t("header.skills")}
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors" onClick={handleNavClick}>
            {t("header.contact")}
          </Link>
        </nav>
      </div>
    </header>
  )
}
