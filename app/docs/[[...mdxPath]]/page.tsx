import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generateStaticParamsFor, importPage } from "nextra/pages";
import type { ReactNode } from "react";

import { useMDXComponents as getMDXComponents } from "@/mdx-components";

type DocPageProps = {
  params: Promise<{
    mdxPath?: string[];
  }>;
};

const generateMdxParams = generateStaticParamsFor("mdxPath");
const docsContentPath = join(process.cwd(), "content");
const hasDocsContent = () => existsSync(docsContentPath);
const docsIndexMetadata: Metadata = {
  title: "Docs",
  description: "OpenOtter documentation.",
};
const placeholderDocs = {
  "hardware-build": {
    description: "Chassis assembly, power layout, wiring, and STM32 Discovery integration.",
    sections: [
      "Vehicle and chassis selection",
      "Servo, ESC, and power distribution",
      "STM32 Discovery kit mounting and BLE controller hookup",
      "Sensor placement and preflight checks",
    ],
    title: "Hardware Build",
  },
  "running-instructions": {
    description: "Boot order, app connection flow, and the sequence for entering autonomous operation safely.",
    sections: [
      "Pre-run checklist",
      "Power-on and controller handshake",
      "App connection and telemetry validation",
      "Autonomous run sequence and shutdown",
    ],
    title: "Running Instructions",
  },
  "software-build": {
    description: "Toolchain setup for the iOS app, STM32 firmware, and related local development prerequisites.",
    sections: [
      "iOS app setup and deployment",
      "STM32 toolchain installation",
      "Firmware build and flash flow",
      "Project-level verification steps",
    ],
    title: "Software Build",
  },
} satisfies Record<
  string,
  {
    description: string;
    sections: string[];
    title: string;
  }
>;

type PlaceholderSlug = keyof typeof placeholderDocs;

function normalizeDocPath(mdxPath?: string[]) {
  if (!mdxPath?.length) {
    return [];
  }

  return mdxPath[0] === "docs" ? mdxPath.slice(1) : mdxPath;
}

function getPlaceholderDoc(mdxPath?: string[]) {
  const normalizedPath = normalizeDocPath(mdxPath);

  if (normalizedPath.length !== 1) {
    return null;
  }

  const slug = normalizedPath[0] as PlaceholderSlug;
  return placeholderDocs[slug] ? { slug, ...placeholderDocs[slug] } : null;
}

export async function generateStaticParams() {
  if (!hasDocsContent()) {
    return [
      { mdxPath: [] as string[] },
      ...Object.keys(placeholderDocs).map((slug) => ({ mdxPath: [slug] })),
    ];
  }

  const generated = await generateMdxParams();
  const normalized = generated.map((entry) => ({
    ...entry,
    mdxPath: normalizeDocPath(entry.mdxPath as string[]),
  }));

  return [{ mdxPath: [] as string[] }, ...normalized];
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const normalizedPath = normalizeDocPath(resolvedParams.mdxPath);
  const placeholderDoc = getPlaceholderDoc(normalizedPath);

  if (!hasDocsContent()) {
    if (placeholderDoc) {
      return {
        description: placeholderDoc.description,
        title: placeholderDoc.title,
      };
    }
    return docsIndexMetadata;
  }

  const { metadata } = await importPage(normalizedPath);
  return metadata;
}

const Wrapper =
  getMDXComponents().wrapper ??
  (({ children }: { children: ReactNode }) => <>{children}</>);

export default async function DocsPage(props: DocPageProps) {
  const params = await props.params;
  const normalizedPath = normalizeDocPath(params.mdxPath);
  const placeholderDoc = getPlaceholderDoc(normalizedPath);

  if (!hasDocsContent()) {
    if (placeholderDoc) {
      return (
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="eyebrow">OpenOtter documentation</p>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {placeholderDoc.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-neutral-300">
              {placeholderDoc.description}
            </p>
          </div>

          <div className="surface-card">
            <h2 className="text-lg font-semibold text-white">Planned sections</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-300">
              {placeholderDoc.sections.map((section) => (
                <li key={section}>{section}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    if (normalizedPath.length) {
      notFound();
    }

    return (
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="eyebrow">OpenOtter documentation</p>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Docs</h1>
          <p className="max-w-2xl text-base leading-7 text-neutral-300">
            The documentation tree is being staged in the next task. This route is live now so the
            exported docs shell, navigation, and GitHub Pages wiring can be verified.
          </p>
        </div>

        <div className="docs-link-grid">
          <Link className="docs-link" href="/docs/hardware-build">
            <span className="docs-link-title">Hardware build</span>
            <span className="docs-link-body">Chassis, wiring, power, and controller setup.</span>
          </Link>
          <Link className="docs-link" href="/docs/software-build">
            <span className="docs-link-title">Software build</span>
            <span className="docs-link-body">Toolchains, app setup, and firmware workflows.</span>
          </Link>
          <Link className="docs-link" href="/docs/running-instructions">
            <span className="docs-link-title">Running guides</span>
            <span className="docs-link-body">Bring-up order and operating flow.</span>
          </Link>
        </div>
      </div>
    );
  }

  const { default: MDXContent, metadata, sourceCode, toc } = await importPage(normalizedPath);

  return (
    <Wrapper metadata={metadata} sourceCode={sourceCode} toc={toc}>
      <MDXContent {...props} params={{ mdxPath: normalizedPath }} />
    </Wrapper>
  );
}
