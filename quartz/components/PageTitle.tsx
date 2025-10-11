import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const slug = fileData.slug || ""
  const isRegenerant = slug.startsWith("regenerant-catalunya")
  
  // Show section-specific title
  const title = isRegenerant ? "Regenerant Catalunya" : (cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title)
  
  // Link to section home or site root
  const baseDir = isRegenerant ? "/regenerant-catalunya" : "/"
  
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
