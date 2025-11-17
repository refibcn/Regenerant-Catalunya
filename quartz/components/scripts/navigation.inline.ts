export default () => {
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

  // Hide/show dev link based on localhost detection
  const updateDevLink = () => {
    const devLink = document.querySelector("a[data-dev-link]")
    if (!devLink) return

    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === ""

    const listItem = devLink.closest("li")
    if (listItem) {
      if (isLocalhost) {
        listItem.style.display = ""
      } else {
        listItem.style.display = "none"
      }
    }
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
    // This script only handles language-aware link updates and active states

    // Update navigation links, dev link visibility, and active state on SPA navigation
    setTimeout(() => {
      updateNavLinks()
      updateDevLink()
      updateActiveLinks()
    }, 0)
  })

  // Update navigation links, dev link visibility, and active state on initial load
  updateNavLinks()
  updateDevLink()
  updateActiveLinks()
}
