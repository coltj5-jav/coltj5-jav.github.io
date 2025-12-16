import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
  Component.Flex({
    components: [
      { Component: Component.PageTitle(), basis: "10rem", shrink: false },
      { Component: Component.Search(), grow: true, basis: "48rem", shrink: true },
      { Component: Component.Darkmode() },
      { Component: Component.ReaderMode() },
    ],
    direction: "row",
    gap: "1rem",
  }),
],
  afterBody: [Component.Graph()],
  footer: Component.Footer({
    links: {
      Email: "mailto: colt.feltes@pm.me",
      "Website": "https://coltfeltes.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
  ],
  right: [],
}
