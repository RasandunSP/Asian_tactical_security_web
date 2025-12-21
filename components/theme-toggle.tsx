"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = resolvedTheme || theme || "light"

  const toggleTheme = React.useCallback(() => {
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    // Ensure the dark class is properly toggled
    if (typeof document !== "undefined") {
      const root = document.documentElement
      if (newTheme === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    }
    setTheme(newTheme)
  }, [currentTheme, setTheme])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Sun className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9"
      aria-label="Toggle theme"
      type="button"
    >
      {currentTheme === "dark" ? (
        <Sun className="h-5 w-5 text-[#B8860B]" />
      ) : (
        <Moon className="h-5 w-5 text-[#1F2937] dark:text-[#F1F5F9]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

