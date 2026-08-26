import type { ReactNode } from "react";
import Link from "next/link";

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <main className="dashboard-shell">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Hydration architecture home">
          <span className="brand-mark">✦</span>
          <span>HEX<span className="brand-muted">/</span>HYDRATION</span>
        </Link>
        <div className="topbar-meta"><span className="pulse" /> SYSTEM ONLINE <span className="version">NEXT 16.3.3</span></div>
      </header>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">Architecture field notes / 001</p>
          <h1>Data arrives.<br /><em>UI stays pure.</em></h1>
          <p className="hero-description">A living dashboard for building fast, resilient interfaces with the App Router, server-first rendering, and a clean hydration boundary.</p>
          <div className="hero-rule"><span>Rick & Morty API</span><span>→</span><span>domain model</span><span>→</span><span>interactive view</span></div>
        </div>
        <div className="hero-diagram" aria-label="Request flow diagram">
          <div className="diagram-orbit orbit-one" /><div className="diagram-orbit orbit-two" />
          <div className="diagram-node node-api"><span>API</span><strong>RM</strong></div>
          <div className="diagram-node node-domain"><span>DOMAIN</span><strong>◈</strong></div>
          <div className="diagram-node node-ui"><span>UI</span><strong>▦</strong></div>
          <div className="diagram-center">01</div>
        </div>
      </div>
      <div className="pillar-grid">
        <article className="pillar-card pillar-green"><span className="pillar-number">01 / RSC</span><h2>Pure RSC<br /><strong>(0kb Client JS)</strong></h2><p>Rendered strictly on the server with zero JavaScript sent to the client bundle.</p><span className="pillar-glyph">◒</span></article>
        <article className="pillar-card pillar-orange"><span className="pillar-number">02 / STREAM</span><h2>Streaming SSR<br /><strong>with Suspense</strong></h2><p>Progressive rendering where static shell loads instantly and heavy data streams concurrently.</p><span className="pillar-glyph">◌</span></article>
        <article className="pillar-card pillar-blue"><span className="pillar-number">03 / STATE</span><h2>Zustand Request-<br /><strong>Scoped Hydration</strong></h2><p>Initial server payload synchronized into client store without duplicate fetches or hydration mismatches.</p><span className="pillar-glyph">⌁</span></article>
      </div>
      {children}
      <footer className="footer"><span>HEX/HYDRATION</span><span>Built to make boundaries visible.</span><span>SERVER FIRST / 2026</span></footer>
    </main>
  );
}
