import { Suspense } from "react";
import { DashboardShell } from "@/presentation/components/dashboard-shell";
import CharacterStream from "@/presentation/components/character-stream";

function StreamFallback() {
  return <section className="explorer loading-panel"><div className="skeleton-title" /><div className="skeleton-grid">{[1, 2, 3].map((item) => <div className="skeleton-card" key={item} />)}</div></section>;
}
  // React Server Components by default with HTML Streaming via Suspense AKA -> HTML Streaming
export default function Home() {
  return (
    <DashboardShell>

      <Suspense fallback={<StreamFallback />}>
        <CharacterStream />
      </Suspense>
    </DashboardShell>
  );
}
