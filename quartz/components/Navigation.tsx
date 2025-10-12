import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/navigation.scss"
import script from "./scripts/navigation.inline"

export default (() => {
  const Navigation: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <nav class={`navigation ${displayClass ?? ""}`}>
        <button class="hamburger" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links">
          <li><a href="/program">Program</a></li>
          <li><a href="/partners">Partners</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    )
  }

  Navigation.css = style
  Navigation.afterDOMLoaded = script
  return Navigation
}) satisfies QuartzComponentConstructor

