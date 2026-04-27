import { existsSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import type { ReactNode } from "react";
import { Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";

import themeConfig from "@/theme.config";
import { Logo } from "@/components/Logo";

const docsContentPath = join(process.cwd(), "content");
const hasDocsContent = () => existsSync(docsContentPath);

export default async function DocsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  if (!hasDocsContent()) {
    return (
      <div className="min-h-screen bg-neutral-50 text-neutral-950">
        <header className="border-b border-black/8">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
            <Link aria-label="OpenOtter home" href="/">
              <Logo />
            </Link>
            <nav className="flex items-center gap-4 text-sm text-neutral-500">
              <Link className="transition hover:text-neutral-900" href="/docs">
                Docs
              </Link>
              <a
                className="transition hover:text-neutral-900"
                href="https://github.com/JuneJulyAugust/openotter"
                rel="noreferrer"
                target="_blank"
              >
                Source
              </a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-6 py-16">{children}</main>
        <footer className="border-t border-black/8">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <span>OpenOtter documentation and project site.</span>
            <a
              className="transition hover:text-neutral-900"
              href="https://github.com/JuneJulyAugust/openotter"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    );
  }

  const pageMap = await getPageMap("/docs");

  return (
    <Layout {...themeConfig} pageMap={pageMap}>
      {children}
    </Layout>
  );
}
