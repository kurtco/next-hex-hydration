# Hex / Hydration

This project implements a modern frontend architecture built on **Next.js (App Router)**, combining server-side rendering, repository-based decoupling, and reactive client-side state management:

## Architecture & Technical Patterns

- **React Server Components (RSC) & HTML Streaming via Suspense:**
  Data-fetching is executed directly on the server by consuming the **Rick and Morty API** (`https://rickandmortyapi.com/api/character`) through a dedicated repository (`createRickMortyCharacterRepository`). We leverage `<Suspense>` to stream the base UI structure instantly while delivering heavy fragments progressively.

- **Domain Mapping & Zero-Fetch Hydration:**
  External data is mapped on the server (`mapCharacter`) to strictly match our application's domain entities (`Character`). This pre-processed data is injected into the initial HTML payload to pre-populate **Zustand** stores on the very first render (_zero-fetch initial load_), ensuring immediate client-side interactivity without duplicate network requests.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Boundaries

- `src/domain/` contains framework-independent character entities.
- `src/application/ports/` defines the repository contract consumed by the application.
- `src/infrastructure/adapters/` fetches and maps the Rick and Morty API response.
- `src/presentation/` contains the RSC shell, Suspense stream, and client-only Zustand explorer.

The server owns the API request. The interactive explorer receives the serialized first-page payload and filters it locally, so hydration does not trigger a duplicate request.

## Verify

```bash
npm run lint
npm run typecheck
npm test
npm run build
```
