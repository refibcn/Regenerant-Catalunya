export default () => {
  // Navigation translations
  const navTranslations: Record<string, Record<string, string>> = {
    en: {
      program: "Program",
      "partners-projects": "Partners & Projects",
      tools: "Tools",
      resources: "Resources",
    },
    es: {
      program: "Programa",
      "partners-projects": "Socios y Proyectos",
      tools: "Herramientas",
      resources: "Recursos",
    },
    ca: {
      program: "Programa",
      "partners-projects": "Socis i Projectes",
      tools: "Eines",
      resources: "Recursos",
    },
  }

  // Update navigation labels based on current language
  const updateNavLabels = () => {
    const currentPath = window.location.pathname
    const navLinks = document.querySelector(".nav-links")
    if (!navLinks) return

    // Detect current language from path
    let currentLang = "en"
    const langMatch = currentPath.match(/^\/(ca|es|en)(\/.*)?$/)
    if (langMatch) {
      currentLang = langMatch[1]
    } else if (
      currentPath === "/" ||
      (!currentPath.startsWith("/ca/") && !currentPath.startsWith("/es/"))
    ) {
      currentLang = "en" // Default to English
    }

    const translations = navTranslations[currentLang] || navTranslations.en
    const links = navLinks.querySelectorAll("a[data-nav-link]")
    
    links.forEach((link) => {
      const linkType = link.getAttribute("data-nav-link")
      if (linkType && translations[linkType]) {
        link.textContent = translations[linkType]
      }
    })
  }

  // Update navigation links to be language-aware
  const updateNavLinks = () => {
    const currentPath = window.location.pathname
    const navLinks = document.querySelector(".nav-links")
    if (!navLinks) return

    // Detect current language from path
    let currentLang = ""
    const langMatch = currentPath.match(/^\/(ca|es|en)(\/.*)?$/)
    if (langMatch) {
      currentLang = langMatch[1]
    } else if (
      currentPath === "/" ||
      (!currentPath.startsWith("/ca/") && !currentPath.startsWith("/es/"))
    ) {
      currentLang = "en" // Default to English
    }

    const links = navLinks.querySelectorAll("a")
    links.forEach((link) => {
      let linkHref = link.getAttribute("href") || ""

      // Skip external links
      if (linkHref.startsWith("http") || linkHref.startsWith("mailto:")) {
        return
      }

      // If link already has language prefix, keep it
      if (linkHref.match(/^\/(ca|es|en)\//)) {
        return
      }

      // Add language prefix if we're in a language-specific section
      if (currentLang && currentLang !== "en") {
        // Remove leading slash if present, add language prefix
        const pathWithoutSlash = linkHref.startsWith("/") ? linkHref.slice(1) : linkHref
        link.setAttribute("href", `/${currentLang}/${pathWithoutSlash}`)
      } else if (currentLang === "en" || !currentLang) {
        // Ensure English links don't have prefix
        link.setAttribute("href", linkHref)
      }
    })
  }


  // Active state functionality for navigation links
  const updateActiveLinks = () => {
    const currentPath = window.location.pathname
    const navLinks = document.querySelector(".nav-links")
    if (!navLinks) return

    const links = navLinks.querySelectorAll("a")

    // Normalize current path - remove language prefix and trailing slashes
    let normalizedPath = currentPath
    const langMatch = currentPath.match(/^\/(ca|es|en)(\/.*)?$/)
    if (langMatch) {
      normalizedPath = langMatch[2] || "/"
    } else if (currentPath === "/") {
      normalizedPath = "/"
    }

    // Remove trailing slash except for root, remove index
    if (normalizedPath !== "/") {
      normalizedPath = normalizedPath.replace(/\/$/, "").replace(/\/index$/, "")
      if (!normalizedPath) normalizedPath = "/"
    }

    links.forEach((link) => {
      let linkHref = link.getAttribute("href") || ""

      // Normalize link href - remove language prefix and trailing slashes
      const linkLangMatch = linkHref.match(/^\/(ca|es|en)(\/.*)?$/)
      if (linkLangMatch) {
        linkHref = linkLangMatch[2] || "/"
      }

      // Remove trailing slash except for root, remove index
      if (linkHref !== "/") {
        linkHref = linkHref.replace(/\/$/, "").replace(/\/index$/, "")
        if (!linkHref) linkHref = "/"
      }

      // Check if current path matches link href exactly or is a child path
      const isActive =
        normalizedPath === linkHref ||
        (linkHref !== "/" && normalizedPath.startsWith(linkHref + "/"))

      if (isActive) {
        link.classList.add("active")
      } else {
        link.classList.remove("active")
      }
    })
  }

  document.addEventListener("nav", () => {
    // Navigation toggle is handled by Navigation.tsx component script
    // This script handles language-aware link updates, label updates, and active states

    // Update navigation labels, links, and active state on SPA navigation
    setTimeout(() => {
      updateNavLabels()
      updateNavLinks()
      updateActiveLinks()
    }, 0)
  })

  // Update navigation labels, links, and active state on initial load
  updateNavLabels()
  updateNavLinks()
  updateActiveLinks()
}
