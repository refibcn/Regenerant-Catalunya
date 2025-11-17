import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n, ValidLocale } from "../i18n"
import { FullSlug } from "../util/path"

const SUPPORTED_LOCALES: ValidLocale[] = ["en-US", "ca-ES", "es-ES"]
const LOCALE_PREFIXES: Partial<Record<ValidLocale, string>> = {
  "ca-ES": "ca",
  "en-US": "en",
  "es-ES": "es",
}
const LOCALE_NAMES: Partial<Record<ValidLocale, string>> = {
  "ca-ES": "CA",
  "en-US": "EN",
  "es-ES": "ES",
}

function getCurrentLanguage(slug: FullSlug): ValidLocale {
  // Try to detect from slug first
  const segments = slug.split("/").filter((s: string) => s.length > 0)
  const firstSegment = segments[0]

  // Check if first segment is a language code
  if (firstSegment === "ca") return "ca-ES"
  if (firstSegment === "es") return "es-ES"
  if (firstSegment === "en") return "en-US"

  // If slug doesn't have language prefix, try to detect from window location (client-side)
  if (typeof window !== "undefined") {
    const path = window.location.pathname
    if (path.startsWith("/ca/") || path === "/ca") return "ca-ES"
    if (path.startsWith("/es/") || path === "/es") return "es-ES"
    if (path.startsWith("/en/") || path === "/en") return "en-US"
    // Root path defaults to English
    if (path === "/" || path === "/index.html") return "en-US"
  }

  // Default to English if no language prefix
  return "en-US"
}

function getLanguagePath(slug: FullSlug, targetLocale: ValidLocale): string {
  const currentLang = getCurrentLanguage(slug)
  let segments = slug.split("/").filter((s: string) => s.length > 0)

  // Remove current language prefix if present
  const currentPrefix = LOCALE_PREFIXES[currentLang]
  if (currentPrefix && segments[0] === currentPrefix) {
    segments.shift()
  }

  // Handle index pages - remove "index" from segments
  if (segments.length > 0 && segments[segments.length - 1] === "index") {
    segments.pop()
  }

  // If we're on the index page and slug doesn't have language info,
  // try to get the current path from window (client-side)
  if (typeof window !== "undefined" && segments.length === 0) {
    const currentPath = window.location.pathname
    // Extract path segments after language prefix
    const pathMatch = currentPath.match(/^\/(?:ca|es|en)(\/.*)?$/)
    if (pathMatch && pathMatch[1]) {
      segments = pathMatch[1].split("/").filter((s) => s.length > 0 && s !== "index")
    }
  }

  // Add target language prefix
  const targetPrefix = LOCALE_PREFIXES[targetLocale]
  if (!targetPrefix) {
    return "/"
  }
  const pathWithoutLang = segments.length > 0 ? `/${segments.join("/")}` : ""

  if (targetPrefix === "en") {
    // English is at root
    return pathWithoutLang || "/"
  }

  // For other languages, add prefix
  return `/${targetPrefix}${pathWithoutLang}`
}

const LanguageSwitcher: QuartzComponent = ({
  displayClass,
  cfg,
  fileData,
}: QuartzComponentProps) => {
  const currentLocale = cfg.locale
  const currentSlug = fileData.slug || ("index" as FullSlug)
  const translation = i18n(currentLocale as ValidLocale) || i18n("en-US" as ValidLocale)
  const langCopy = translation.components.languageSwitcher || {
    label: "Language",
    selectLanguage: "Select language",
  }

  // Detect actual current language from slug or config locale
  let actualLang = getCurrentLanguage(currentSlug)
  // If slug doesn't have language info, use config locale
  if (actualLang === "en-US" && currentLocale !== "en-US") {
    actualLang = currentLocale as ValidLocale
  }

  return (
    <div class={classNames(displayClass, "language-switcher")}>
      <div class="language-switcher__container">
        {SUPPORTED_LOCALES.map((locale) => {
          const isActive = locale === actualLang
          // Generate initial path - will be updated by client-side script
          let path = getLanguagePath(currentSlug, locale)
          // If we're building for a specific locale and slug is just "index",
          // generate better initial paths
          if (currentSlug === "index" && currentLocale === locale) {
            const prefix = LOCALE_PREFIXES[locale]
            path = prefix === "en" ? "/" : `/${prefix}/`
          } else if (currentSlug === "index") {
            const prefix = LOCALE_PREFIXES[locale]
            path = prefix === "en" ? "/" : `/${prefix}/`
          }
          const localeName = LOCALE_NAMES[locale] || locale

          return (
            <a
              href={path}
              class={`language-switcher__option ${isActive ? "language-switcher__option--active" : ""}`}
              aria-label={`${langCopy.selectLanguage}: ${localeName}`}
              aria-current={isActive ? "page" : undefined}
              data-locale={locale}
            >
              {localeName}
            </a>
          )
        })}
      </div>
    </div>
  )
}

LanguageSwitcher.css = `
.language-switcher {
  display: flex;
  align-items: center;
}

.language-switcher__container {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: var(--action-btn-bg, color-mix(in srgb, var(--light) 95%, rgba(255, 255, 255, 0.6)));
  border: var(--action-btn-border, 1px solid var(--gray));
  border-radius: 0.375rem;
  padding: 0.125rem;
  box-shadow: var(--action-btn-shadow, 0 1px 2px rgba(0, 0, 0, 0.05));
}

.language-switcher__option {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 1.75rem;
  padding: 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--darkgray);
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease, color 0.15s ease;
  border: none;
  background: transparent;
  cursor: pointer;
  box-sizing: border-box;
}

.language-switcher__option:hover {
  background: var(--highlight);
  color: var(--dark);
}

.language-switcher__option--active {
  background: var(--dark) !important;
  color: var(--light) !important;
  font-weight: 600;
  width: 2rem;
  height: 1.75rem;
  padding: 0;
}

.language-switcher__option--active:hover {
  background: var(--darkgray) !important;
  color: var(--light) !important;
  width: 2rem;
  height: 1.75rem;
}

.language-switcher__option--active,
.language-switcher__option--active:hover,
.language-switcher__option--active:focus,
.language-switcher__option--active:visited {
  color: var(--light) !important;
}

@media (max-width: 640px) {
  .language-switcher__option {
    width: 1.75rem;
    height: 1.5rem;
    font-size: 0.8125rem;
  }
  
  .language-switcher__option--active,
  .language-switcher__option--active:hover {
    width: 1.75rem;
    height: 1.5rem;
  }
}
`

LanguageSwitcher.afterDOMLoaded = `
(function() {
  function updateLanguageSwitcherLinks() {
    const switcher = document.querySelector('.language-switcher__container');
    if (!switcher) return;
    
    const currentPath = window.location.pathname;
    const links = switcher.querySelectorAll('a[data-locale]');
    
    // Extract current path without language prefix
    let pathWithoutLang = currentPath;
    const langMatch = currentPath.match(/^\\/(ca|es|en)(\\/.*)?$/);
    if (langMatch) {
      pathWithoutLang = langMatch[2] || '/';
    } else if (currentPath === '/') {
      pathWithoutLang = '/';
    }
    
    // Normalize path - remove trailing slash except for root, remove index
    if (pathWithoutLang !== '/') {
      pathWithoutLang = pathWithoutLang.replace(/\\/$/, '').replace(/\\/index$/, '');
      if (!pathWithoutLang) pathWithoutLang = '/';
    }
    
    links.forEach(function(link) {
      const locale = link.getAttribute('data-locale');
      let newPath = '';
      
      if (locale === 'en-US') {
        newPath = pathWithoutLang === '/' ? '/' : pathWithoutLang;
      } else if (locale === 'ca-ES') {
        newPath = '/ca' + (pathWithoutLang === '/' ? '' : pathWithoutLang);
      } else if (locale === 'es-ES') {
        newPath = '/es' + (pathWithoutLang === '/' ? '' : pathWithoutLang);
      }
      
      link.setAttribute('href', newPath);
    });
  }
  
  // Update on page load
  updateLanguageSwitcherLinks();
  
  // Update after SPA navigation
  document.addEventListener('nav', updateLanguageSwitcherLinks);
})();
`

export default (() => LanguageSwitcher) satisfies QuartzComponentConstructor
