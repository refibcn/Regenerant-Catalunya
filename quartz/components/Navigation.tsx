import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/navigation.scss"
import script from "./scripts/navigation.inline"

export default (() => {
  const Navigation: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const slug = fileData.slug || ""
    const isRegenerant = slug.startsWith("regenerant-catalunya")
    const isRefiBCN = slug.startsWith("refibcn")
    
    // Regenerant Catalunya Navigation
    if (isRegenerant) {
      return (
        <nav class={`navigation regenerant ${displayClass ?? ""}`}>
          <button class="hamburger" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul class="nav-links">
            <li><a href="/regenerant-catalunya">Home</a></li>
            <li><a href="/regenerant-catalunya/about">About</a></li>
            <li><a href="/regenerant-catalunya/program">Program</a></li>
            <li><a href="/regenerant-catalunya/projects">Projects</a></li>
            <li><a href="/regenerant-catalunya/partners">Partners</a></li>
            <li><a href="/regenerant-catalunya/updates">Updates</a></li>
            <li><a href="mailto:hola@refibcn.cat">Contact</a></li>
          </ul>
        </nav>
      )
    }
    
    // ReFi BCN Navigation (default for root and /refibcn)
    return (
      <nav class={`navigation refibcn ${displayClass ?? ""}`}>
        <button class="hamburger" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/refibcn/about">About</a></li>
          <li><a href="/refibcn/events">Events</a></li>
          <li><a href="/refibcn/ecosystem">Ecosystem</a></li>
          <li><a href="/refibcn/blog">Blog</a></li>
          <li><a href="mailto:hola@refibcn.cat">Contact</a></li>
        </ul>
      </nav>
    )
  }

  Navigation.css = style
  Navigation.afterDOMLoaded = script
  return Navigation
}) satisfies QuartzComponentConstructor

