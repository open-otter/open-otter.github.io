import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import { Footer, Layout, Navbar } from "nextra-theme-docs";

const docsRepositoryBase =
  "https://github.com/open-otter/open-otter.github.io/tree/main";
const sourceRepository = "https://github.com/JuneJulyAugust/openotter";

type DocsThemeConfig = Omit<ComponentProps<typeof Layout>, "children" | "pageMap">;

const themeConfig: DocsThemeConfig = {
  darkMode: false,
  docsRepositoryBase,
  editLink: "Edit this page",
  feedback: {
    content: "Open a docs issue",
    labels: "documentation,feedback",
  },
  footer: (
    <Footer className="border-t border-neutral-900 bg-black/60 px-6 py-8 text-sm text-neutral-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span>OpenOtter documentation and project site.</span>
        <a
          className="transition hover:text-neutral-100"
          href={sourceRepository}
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </Footer>
  ),
  navbar: (
    <Navbar
      align="right"
      logo={
        <span className="flex items-center gap-3 font-semibold tracking-tight">
          <Image
            alt="OpenOtter"
            className="hidden h-7 w-auto dark:block"
            height="28"
            src="/brand/openotter-logo-light.png"
            width="160"
          />
          <Image
            alt="OpenOtter"
            className="h-7 w-auto dark:hidden"
            height="28"
            src="/brand/openotter-logo-dark.png"
            width="160"
          />
        </span>
      }
      logoLink="/"
      projectLink={sourceRepository}
    >
      <Link className="text-sm text-neutral-500 transition hover:text-neutral-100" href="/docs">
        Docs
      </Link>
    </Navbar>
  ),
  navigation: true,
  nextThemes: {
    attribute: "class",
    defaultTheme: "dark",
    disableTransitionOnChange: true,
    forcedTheme: "dark",
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
    defaultOpen: true,
    toggleButton: true,
  },
  toc: {
    backToTop: "Back to top",
    float: true,
    title: "On this page",
  },
};

export default themeConfig;
