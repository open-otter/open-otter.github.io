import Image from "next/image";
import Link from "next/link";

const featureCards = [
  {
    title: "Mobile perception",
    body: "Run on-vehicle sensing and scene understanding from a phone-class compute stack with real sensor data.",
  },
  {
    title: "Embedded control",
    body: "Bridge autonomy outputs into RC steering, throttle, telemetry, and hardware-safe low-level loops.",
  },
  {
    title: "Open hardware path",
    body: "Keep the vehicle stack inspectable, replaceable, and practical for field iteration instead of closed demos.",
  },
  {
    title: "Agent runtime",
    body: "Connect perception, control, and operator tooling into a platform that can host physical AI workflows.",
  },
];

const docsLinks = [
  {
    href: "/docs/hardware-build",
    title: "Hardware build",
    body: "Chassis, power, wiring, and controller integration.",
  },
  {
    href: "/docs/software-build",
    title: "Software build",
    body: "iOS tooling, firmware build chains, and local setup.",
  },
  {
    href: "/docs/running-instructions",
    title: "Running guides",
    body: "Bring-up, connection flow, and operating sequence.",
  },
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="border-b border-white/10">
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
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(440px,0.95fr)] lg:py-24">
          <div className="flex flex-col justify-center gap-8">
            <div className="space-y-5">
              <p className="eyebrow">Open-source autonomy for physical RC systems</p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                OpenOtter: The Open-Source Autonomous RC Platform
              </h1>
              <p className="max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
                OpenOtter connects phone-class perception, embedded control, and real RC hardware
                into a field-testable autonomy stack. The site is the front door for the platform
                and the docs path into the build.
              </p>
            </div>

            <div className="cta-row">
              <Link className="cta-button cta-button-primary" href="/docs">
                Read the Docs
              </Link>
              <a
                className="cta-button"
                href="https://github.com/JuneJulyAugust/openotter"
                rel="noreferrer"
                target="_blank"
              >
                View Source
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="video-frame">
              <Image
                alt="OpenOtter perception and autonomy preview"
                className="absolute inset-0 h-full w-full object-cover"
                fill
                src="/media/hero/openotter-hero-poster.png"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.86),rgba(10,10,10,0.28))]" />
              <div className="relative flex h-full flex-col justify-between p-5">
                <span className="frame-chip">Demo capture</span>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-white">LiDAR + RGB perception overlay</p>
                  <p className="max-w-sm text-sm leading-6 text-neutral-300">
                    Placeholder media surface using the current poster asset until a production
                    demo reel is added.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="section-heading">
            <p className="eyebrow">Platform focus</p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              The stack is built for iteration on real hardware.
            </h2>
          </div>
          <div className="surface-grid mt-10">
            {featureCards.map((feature) => (
              <article className="surface-card" key={feature.title}>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-300">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center">
          <div className="space-y-5">
            <p className="eyebrow">Architecture</p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              From operator tooling to embedded actuation.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-neutral-300 sm:text-base">
              OpenOtter spans the mobile app, autonomy runtime, and low-level hardware bridge. The
              result is a single platform for bringing sensors, control surfaces, and field
              operation into one loop.
            </p>
          </div>
          <div className="architecture-frame">
            <Image
              alt="OpenOtter system architecture"
              className="w-full rounded-lg border border-white/10"
              height={720}
              src="/media/architecture/openotter-architecture.png"
              width={1280}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="section-heading">
            <p className="eyebrow">Start here</p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Enter through the build guides.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base">
              The docs are organized around the real hardware and software bring-up path rather
              than a marketing funnel.
            </p>
          </div>
          <div className="docs-link-grid mt-10">
            {docsLinks.map((entry) => (
              <Link className="docs-link" href={entry.href} key={entry.title}>
                <span className="docs-link-title">{entry.title}</span>
                <span className="docs-link-body">{entry.body}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
