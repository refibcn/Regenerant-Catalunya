import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Navigation(),
    Component.Search(),
    Component.LanguageSwitcher(),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "ReFi Barcelona": "https://refibcn.cat",
      GitHub: "https://github.com/refibcn/Regenerant-Catalunya",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => {
        const slug = page.fileData.slug
        return slug !== "index" && slug !== "es/index" && slug !== "ca/index"
      },
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => {
        const slug = page.fileData.slug
        return slug !== "index" && slug !== "es/index" && slug !== "ca/index"
      },
    }),
    Component.TagList(),
  ],
  afterBody: [
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => {
        const slug = page.fileData.slug
        return slug !== "index" && slug !== "es/index" && slug !== "ca/index"
      },
    }),
  ],
  left: [
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.Explorer()),
      condition: (page) => !!page.fileData.frontmatter?.showSidebars,
    }),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: (page) => !!page.fileData.frontmatter?.showSidebars,
    }),
    Component.ConditionalRender({
      component: Component.Graph(),
      condition: (page) => !!page.fileData.frontmatter?.showSidebars,
    }),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: (page) => !!page.fileData.frontmatter?.showSidebars,
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.Explorer()),
      condition: (page) => !!page.fileData.frontmatter?.showSidebars,
    }),
  ],
  right: [],
}
