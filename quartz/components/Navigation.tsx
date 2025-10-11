import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/navigation.scss"
import script from "./scripts/navigation.inline"

export default (() => {
  const Navigation: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const slug = fileData.slug || ""
    const isRegenerant = slug.startsWith("regenerant")
    const isRefiBCN = slug.startsWith("refibcn")
    
    // Default/main landing navigation (minimal)
    if (!isRegenerant && !isRefiBCN) {
      return (
        <nav class={`navigation main ${displayClass ?? ""}`}>
          <button class="hamburger" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul class="nav-links">
            <li><a href="/regenerant">Regenerant Catalunya</a></li>
            <li><a href="/refibcn">ReFi BCN</a></li>
            <li><a href="mailto:hola@refibcn.cat">Contact</a></li>
          </ul>
        </nav>
      )
    }
    
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
            <li><a href="/regenerant">Home</a></li>
            <li><a href="/regenerant/about">About</a></li>
            <li><a href="/regenerant/program">Program</a></li>
            <li><a href="/regenerant/projects">Projects</a></li>
            <li><a href="/regenerant/partners">Partners</a></li>
            <li><a href="/regenerant/updates">Updates</a></li>
            <li><a href="mailto:hola@refibcn.cat">Contact</a></li>
          </ul>
        </nav>
      )
    }
    
    // ReFi BCN Navigation
    return (
      <nav class={`navigation refibcn ${displayClass ?? ""}`}>
        <button class="hamburger" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links">
          <li><a href="/refibcn">Home</a></li>
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

