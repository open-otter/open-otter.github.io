import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Play, Smartphone, Terminal, Wrench } from "lucide-react";
import { Logo } from "@/components/Logo";

const featureCards = [
  {
    title: "Mobile perception",
    body: "Run on-vehicle sensing and scene understanding from a phone-class compute stack.",
    icon: Smartphone,
  },
  {
    title: "Embedded control",
    body: "Bridge autonomy outputs into RC steering, throttle, telemetry, and low-level loops.",
    icon: Cpu,
  },
];

const docsLinks = [
  {
    href: "/docs/hardware-build",
    title: "Hardware build",
    body: "Chassis, power, wiring, and controller integration.",
    icon: Wrench,
  },
  {
    href: "/docs/software-build",
    title: "Software build",
    body: "iOS tooling, firmware build chains, and local setup.",
    icon: Terminal,
  },
  {
    href: "/docs/running-instructions",
    title: "Running guides",
    body: "Bring-up, connection flow, and operating sequence.",
    icon: Play,
  },
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="border-b border-slate-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 h-16">
          <div className="flex items-center gap-8">
            <Link aria-label="OpenOtter home" href="/" className="flex items-center">
              <Logo />
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
              <Link className="text-slate-800" href="/docs">
                Docs
              </Link>
              <a
                className="transition-colors hover:text-slate-800"
                href="https://github.com/JuneJulyAugust/openotter"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
             <Link className="hidden md:flex px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded hover:bg-brand-700 transition-colors shadow-sm" href="/docs">
               Get Started
             </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-slate-900">
            Open-source autonomy for physical RC systems.
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            Connect phone-class perception, embedded control, and real RC hardware into a field-testable autonomy stack. Built for iteration on real hardware.
          </p>
          <div className="cta-row">
            <Link className="cta-button cta-button-primary gap-2" href="/docs">
              Read the Docs
              <ArrowRight className="h-4 w-4" />
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
      </section>

      <section className="border-y border-slate-200/60 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Architecture</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">
                From operator tooling to embedded actuation.
              </h2>
              <p className="text-lg leading-relaxed text-slate-600 mb-8">
                OpenOtter spans the mobile app, autonomy runtime, and low-level hardware bridge. The
                result is a single platform for bringing sensors, control surfaces, and field
                operation into one loop.
              </p>
              <ul className="space-y-6">
                {featureCards.map((feature) => (
                  <li className="flex items-start gap-4" key={feature.title}>
                    <div className="mt-1 w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">{feature.title}</h4>
                      <p className="text-slate-500 text-sm mt-1">{feature.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full">
              <div className="architecture-frame w-full relative border border-slate-200/60 bg-white rounded-xl shadow-sm overflow-hidden flex justify-center items-center p-2 sm:p-6">
                 <div className="relative w-full aspect-[16/9] max-w-full">
                   <Image
                      alt="OpenOtter system architecture"
                      className="object-contain"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      src="/media/architecture/openotter-architecture.png"
                    />
                 </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-100 to-transparent opacity-50 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="section-heading mb-10">
          <p className="eyebrow mb-2">Start here</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Enter through the build guides.
          </h2>
        </div>
        <div className="docs-link-grid">
          {docsLinks.map((entry) => (
            <Link className="docs-link group block" href={entry.href} key={entry.title}>
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                <entry.icon className="w-5 h-5" />
              </div>
              <span className="docs-link-title group-hover:text-brand-600">{entry.title}</span>
              <span className="docs-link-body mt-2">{entry.body}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
