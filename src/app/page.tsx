import Link from "next/link";

const nullhypeStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nullhype",
    url: "https://nullhype.tech",
    sameAs: [
      "https://x.com/nullhypeai",
      "https://github.com/nullhypeai/hypecheck",
      "https://www.producthunt.com/posts/hypecheck",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nullhype",
    url: "https://nullhype.tech",
    description:
      "Nullhype finds, tests, and explains AI and frontier-tech shifts before their business consequences become obvious.",
  },
];

const productLinks = [
  {
    name: "HypeCheck",
    eyebrow: "Live product",
    href: "https://hypecheck.nullhype.tech",
    description:
      "AI reality checks for startup ideas. Stress-test weak assumptions before you build.",
    action: "Try HypeCheck",
  },
  {
    name: "AdoptCheck",
    eyebrow: "Live product",
    href: "https://adoptcheck.nullhype.tech",
    description:
      "Open-source repo due diligence before you install, fork, or ship.",
    action: "Try AdoptCheck",
  },
];

const proofLinks = [
  {
    label: "HypeCheck on Product Hunt",
    href: "https://www.producthunt.com/posts/hypecheck",
  },
  {
    label: "HypeCheck source code",
    href: "https://github.com/nullhypeai/hypecheck",
  },
  {
    label: "Nullhype on X",
    href: "https://x.com/nullhypeai",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {nullhypeStructuredData.map((entry) => (
        <script
          key={entry["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}

      <header className="border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-6">
          <Link href="/" className="font-mono text-sm font-semibold uppercase text-neutral-50">
            Nullhype
          </Link>
          <nav className="flex items-center gap-4 text-sm text-neutral-400">
            <a
              href="https://x.com/nullhypeai"
              className="transition-colors hover:text-neutral-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <a
              href="https://github.com/nullhypeai/hypecheck"
              className="transition-colors hover:text-neutral-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="px-5 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase text-cyan-300">
                Nullhype Labs
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-neutral-50 sm:text-6xl">
                Every AI launch has a hidden business implication.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
                Nullhype finds the signal, tests it in public, and turns the useful
                parts into small tools for builders.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://hypecheck.nullhype.tech"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-neutral-50 px-5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-cyan-100"
                >
                  Try HypeCheck
                </a>
                <a
                  href="https://x.com/nullhypeai"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-semibold text-neutral-100 transition-colors hover:border-cyan-300 hover:text-cyan-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow @nullhypeai
                </a>
              </div>
            </div>

            <div className="border border-white/10 bg-neutral-900/80 p-5 shadow-2xl shadow-black/30">
              <div className="border-b border-white/10 pb-4">
                <p className="font-mono text-xs uppercase text-neutral-500">
                  Current thesis
                </p>
                <p className="mt-3 text-lg leading-7 text-neutral-100">
                  What changes. Who wins. What gets built.
                </p>
              </div>
              <div className="grid gap-4 pt-5 text-sm text-neutral-300">
                <div className="flex items-start justify-between gap-4">
                  <span>AI startup ideas</span>
                  <span className="font-mono text-cyan-300">HypeCheck</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Open-source adoption risk</span>
                  <span className="font-mono text-amber-300">AdoptCheck</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Market implications</span>
                  <span className="font-mono text-neutral-100">Nullhype</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-neutral-900 px-5 py-12 sm:px-6">
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {productLinks.map((product) => (
              <a
                key={product.name}
                href={product.href}
                className="group border border-white/10 bg-neutral-950 p-6 transition-colors hover:border-cyan-300/70"
                target={product.href.startsWith("http") ? "_blank" : undefined}
                rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <p className="font-mono text-xs uppercase text-neutral-500">
                  {product.eyebrow}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-neutral-50">
                  {product.name}
                </h2>
                <p className="mt-3 min-h-16 text-sm leading-6 text-neutral-300">
                  {product.description}
                </p>
                <span className="mt-6 inline-flex text-sm font-semibold text-cyan-300 group-hover:text-cyan-100">
                  {product.action} -&gt;
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="px-5 py-12 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase text-neutral-500">
              Latest proof
            </p>
            <div className="mt-5 grid gap-3">
              {proofLinks.map((proof) => (
                <a
                  key={proof.href}
                  href={proof.href}
                  className="flex min-h-14 items-center justify-between gap-4 border border-white/10 px-4 text-sm text-neutral-200 transition-colors hover:border-cyan-300/70 hover:text-cyan-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{proof.label}</span>
                  <span aria-hidden="true" className="font-mono text-neutral-500">
                    -&gt;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-neutral-500 sm:px-6">
        Nullhype studies AI, markets, open-source tools, and builder workflows.
      </footer>
    </div>
  );
}
