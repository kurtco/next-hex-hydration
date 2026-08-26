# Repository Instructions

## Commands

- Install with `npm install`; run locally with `npm run dev`.
- Verify in order with `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.
- `npm test` currently uses Node's test runner and has no test files yet.

## Current State

- The app is scaffolded with Next.js `16.3.3`, App Router, strict TypeScript, Tailwind CSS, and Zustand; `package.json` and `package-lock.json` are the dependency source of truth.
- There is no CI workflow, formatter, or OpenCode configuration in the repository.

## Intended Architecture

- Build a Next.js App Router application in strict TypeScript using the Rick and Morty API at `https://rickandmortyapi.com/api`.
- Tailwind CSS is allowed for styling the UI.
- Keep boundaries explicit: domain entities/types in `src/domain/`, application ports in `src/application/ports/`, API adapters in `src/infrastructure/adapters/`, and Next.js/UI code in `src/presentation/`.
- UI code must depend on repository ports, not directly on the Rick and Morty API. Keep fetching and mapping logic in infrastructure adapters.
- Use Server Components for server data access and a `Suspense` boundary to stream the character data behind an immediately rendered shell.
- Use a request-scoped/factory Zustand store for server-provided initial state. Serialize the initial payload into the client without a second fetch or nondeterministic initial render.
- Keep static stats/footer content as pure Server Components with no client directive or client-only dependency.

## Required Demonstration UI

- The dashboard must visibly explain these pillars and use these exact subtitles:
  - `Pure RSC (0kb Client JS)`: "Rendered strictly on the server with zero JavaScript sent to the client bundle."
  - `Streaming SSR with Suspense`: "Progressive rendering where static shell loads instantly and heavy data streams concurrently."
  - `Zustand Request-Scoped Hydration`: "Initial server payload synchronized into client store without duplicate fetches or hydration mismatches."

## Verification

- No repository verification command exists until the app is scaffolded. Add and use the manifest's lint, typecheck, test, and build scripts once they are present.
- Before considering changes complete, verify the production build and check that client components do not directly fetch the API or cause hydration warnings.
