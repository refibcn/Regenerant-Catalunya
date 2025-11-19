import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n, ValidLocale } from "../i18n"
import { FullSlug } from "../util/path"
import style from "./styles/navigation.scss"

function getCurrentLanguage(slug: FullSlug): ValidLocale {
  const segments = slug.split("/").filter((s: string) => s.length > 0)
  const firstSegment = segments[0]
  
  if (firstSegment === "ca") return "ca-ES"
  if (firstSegment === "es") return "es-ES"
  if (firstSegment === "en") return "en-US"
  
  return "en-US"
}

export default (() => {
  const Navigation: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
    const currentSlug = (fileData.slug || "index") as FullSlug
    const currentLang = getCurrentLanguage(currentSlug)
    const translation = i18n(currentLang)
    const navLabels = translation.components.navigation || {
      program: "Program",
      partnersProjects: "Partners & Projects",
      tools: "Tools",
      resources: "Resources",
    }
    
    // Determine base path for links based on current language
    // For English (en-US), use root path, for others use language prefix
    const basePath = currentLang === "en-US" ? "" : currentLang === "ca-ES" ? "/ca" : "/es"
    
    return (
      <nav class={`navigation ${displayClass ?? ""}`} aria-label="Primary navigation">
        <div class="nav-shell">
          <ul id="nav-menu" class="nav-links">
            <li>
              <a href={basePath ? `${basePath}/program` : "/program"} data-nav-link="program">{navLabels.program}</a>
            </li>
            <li>
              <a href={basePath ? `${basePath}/program/partners-projects` : "/program/partners-projects"} data-nav-link="partners-projects">{navLabels.partnersProjects}</a>
            </li>
            <li>
              <a href={basePath ? `${basePath}/program/tools` : "/program/tools"} data-nav-link="tools">{navLabels.tools}</a>
            </li>
            <li>
              <a href={basePath ? `${basePath}/resources` : "/resources"} data-nav-link="resources">{navLabels.resources}</a>
            </li>
          </ul>
          <button
            class="nav-toggle action-button"
            type="button"
            aria-controls="nav-menu"
            aria-expanded="false"
            aria-label="Toggle navigation menu"
            data-nav-toggle
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>
    )
  }

  Navigation.css = style
  Navigation.afterDOMLoaded = `
    (function() {
      function setupNavigation() {
        const navigation = document.querySelector('.navigation');
        const navShell = navigation?.querySelector('.nav-shell');
        const navMenu = navigation?.querySelector('#nav-menu') || navigation?.querySelector('.nav-links');
        const menuButton = navigation?.querySelector('[data-nav-toggle]') || navigation?.querySelector('.nav-toggle');

        if (!navigation || !navShell || !navMenu || !menuButton) {
          return;
        }

        let isCollapsed = navigation.hasAttribute('data-collapsed');
        let rafId = null;

        const closeMenu = () => {
          navMenu.classList.remove('open');
          navShell.classList.remove('menu-open');
          menuButton.setAttribute('aria-expanded', 'false');
        };

        const openMenu = () => {
          navMenu.classList.add('open');
          navShell.classList.add('menu-open');
          menuButton.setAttribute('aria-expanded', 'true');
          const firstLink = navMenu.querySelector('a');
          if (firstLink instanceof HTMLElement) {
            firstLink.focus();
          }
        };

        const measureNavWidth = () => {
          const originalStyle = navMenu.getAttribute('style') ?? '';
          navMenu.setAttribute(
            'style',
            [
              originalStyle,
              'position:absolute !important',
              'visibility:hidden !important',
              'display:flex !important',
              'flex-direction:row !important',
              'flex-wrap:nowrap !important',
              'white-space:nowrap !important',
              'height:auto !important',
              'max-width:none !important',
            ].join(';')
          );
          const width = navMenu.scrollWidth;
          if (originalStyle) {
            navMenu.setAttribute('style', originalStyle);
          } else {
            navMenu.removeAttribute('style');
          }
          return width;
        };

        const updateCollapsedState = () => {
          if (rafId !== null) {
            return;
          }
          rafId = requestAnimationFrame(() => {
            rafId = null;
            
            // Ensure elements are still available (in case of DOM changes)
            if (!navigation || !navShell || !navMenu) {
              return;
            }
            
            const available = navShell.clientWidth;
            const needed = measureNavWidth();
            const forceMobile = window.innerWidth <= 768;
            const shouldCollapse = forceMobile || needed + 48 > available;

            // Always update state to ensure accuracy, especially after language changes
            const previousCollapsed = isCollapsed;
            isCollapsed = shouldCollapse;

            if (shouldCollapse) {
              navigation.setAttribute('data-collapsed', 'true');
              // If switching from expanded to collapsed, ensure menu is closed
              if (!previousCollapsed) {
                closeMenu();
              }
            } else {
              navigation.removeAttribute('data-collapsed');
              // Always close menu when expanding
              closeMenu();
            }
          });
        };

        const scheduleUpdate = () => {
          updateCollapsedState();
        };

        const forceUpdate = () => {
          // Clear any pending updates and force immediate recalculation
          if (rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
          // Use double RAF to ensure DOM has fully updated
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              updateCollapsedState();
            });
          });
        };

        // Remove old event listeners if they exist
        const oldResizeHandler = window._navResizeHandler;
        if (oldResizeHandler) {
          window.removeEventListener('resize', oldResizeHandler);
        }
        window._navResizeHandler = scheduleUpdate;

        const resizeObserver = new ResizeObserver(scheduleUpdate);
        resizeObserver.observe(navigation);
        window.addEventListener('resize', scheduleUpdate);
        
        // Initial setup
        setTimeout(() => {
          updateCollapsedState();
        }, 100);

        // Listen to SPA navigation events to recalculate on language switch
        const handleNav = () => {
          setTimeout(() => {
            forceUpdate();
          }, 100);
        };
        
        document.removeEventListener('nav', handleNav);
        document.addEventListener('nav', handleNav);

        // Watch for text content changes in navigation links (e.g., language switching)
        const mutationObserver = new MutationObserver(() => {
          scheduleUpdate();
        });
        
        mutationObserver.observe(navMenu, {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: false
        });

        // Remove old click handlers if they exist
        const oldClickHandler = menuButton._navClickHandler;
        if (oldClickHandler) {
          menuButton.removeEventListener('click', oldClickHandler);
        }
        
        const handleClick = (event) => {
          event.preventDefault();
          event.stopPropagation();
          const isOpen = navMenu.classList.contains('open');
          if (isOpen) {
            closeMenu();
          } else {
            openMenu();
          }
        };
        
        menuButton._navClickHandler = handleClick;
        menuButton.addEventListener('click', handleClick);

        const handleKeydown = (event) => {
          if (event.key === 'Escape' && navMenu.classList.contains('open')) {
            closeMenu();
            menuButton.focus();
          }
        };
        
        document.removeEventListener('keydown', handleKeydown);
        document.addEventListener('keydown', handleKeydown);

        const handleOutsideClick = (event) => {
          if (!navigation.contains(event.target)) {
            closeMenu();
          }
        };
        
        document.removeEventListener('click', handleOutsideClick);
        document.addEventListener('click', handleOutsideClick);

        navMenu.querySelectorAll('a').forEach((link) => {
          const oldLinkHandler = link._navLinkHandler;
          if (oldLinkHandler) {
            link.removeEventListener('click', oldLinkHandler);
          }
          const linkHandler = () => closeMenu();
          link._navLinkHandler = linkHandler;
          link.addEventListener('click', linkHandler);
        });
      }

      // Run immediately if DOM is ready, otherwise wait
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupNavigation);
      } else {
        setupNavigation();
      }

      // Also run on SPA navigation events
      document.addEventListener('nav', () => {
        setTimeout(setupNavigation, 50);
      });
    })();
  `

  return Navigation
}) satisfies QuartzComponentConstructor
