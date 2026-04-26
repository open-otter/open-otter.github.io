import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";

import themeConfig from "@/theme.config";

const docsContentPath = join(process.cwd(), "content");
const hasDocsContent = () => existsSync(docsContentPath);

export default async function DocsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  if (!hasDocsContent()) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <header className="border-b border-white/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
            <Link aria-label="OpenOtter home" href="/">
              <Image
                alt="OpenOtter"
                className="h-8 w-auto"
                height="32"
                src="/brand/openotter-logo-light.png"
                width="182"
              />
            </Link>
            <nav className="flex items-center gap-4 text-sm text-neutral-400">
              <Link className="transition hover:text-neutral-100" href="/docs">
                Docs
              </Link>
              <a
                className="transition hover:text-neutral-100"
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
        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
            <span>OpenOtter documentation and project site.</span>
            <a
              className="transition hover:text-neutral-100"
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
