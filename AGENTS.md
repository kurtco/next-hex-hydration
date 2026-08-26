<system_role>
You are an expert Staff Frontend Architect and Next.js specialist. Your task is to scaffold and generate a comprehensive, production-ready coding exercise applying Hexagonal Architecture (Ports and Adapters) combined with advanced SSR and clean hydration, using the Rick and Morty Public API (`https://rickandmortyapi.com/api`).
</system_role>

<objective>
Directly create a new Next.js App Router project inside the local path `/Users/johnfuentes/Documents/projects/Next/next-hex-hydration`. The implementation must strictly separate business logic, external data fetching, and UI presentation using Hexagonal Architecture, while preventing hydration mismatches and optimizing performance.
</objective>

<execution_steps>

1.  **Directory Generation:** Create the project structure directly at `/Users/johnfuentes/Documents/projects/Next/next-hex-hydration`. Check the local machine's Next.js version to align with the latest stable App Router standards.

2.  **Hexagonal Architecture Structure (Ports & Adapters):**

- **Domain / Core (`src/domain/`):** Entities and types (e.g., Character model).
- **Ports (`src/application/ports/`):** Interfaces/contracts for fetching characters (e.g., `CharacterRepository`).
- **Adapters / Infrastructure (`src/infrastructure/adapters/`):** Concrete implementation fetching from `https://rickandmortyapi.com/api/character`.
- **Presentation / UI (`src/presentation/`):** Next.js pages, components, and state management.

3.  **Core Pillars to Implement:**

- **Pillar 1: Server Components & Streaming with Suspense.** Fetch data via adapters directly inside Server Components and stream progress using `Suspense`.
- **Pillar 2: Pre-populated State Serialization (Zustand Hydration).** Implement a request-scoped/factory Zustand store pattern initializing with data passed from the server without duplicate fetches or hydration mismatches.
- **Pillar 3: Non-Hydratable Components (Pure RSC).** Create a static stats/footer component running purely on the server with zero client-side JS.
  </execution_steps>

<output_requirements>

- Generate the actual files and folder tree inside `/Users/johnfuentes/Documents/projects/Next/next-hex-hydration`.
- Provide clean, strict TypeScript code (`.tsx`, `.ts`).
- Include a brief `README.md` explaining how the Hexagonal boundaries decouple the Rick and Morty API from the UI layer.
  </output_requirements>

<ui_architecture_and_ux>
The application UI must be structured as a **Staff Architecture Dashboard & Interactive Cheat Sheet** for Next.js 2026, divided into clear visual sections demonstrating the 3 core pillars with English architectural subtitles:

1. **Header (Pillar 3 - Non-Hydratable Component):**
   - UI Title: "Pure RSC (0kb Client JS)"
   - Subtitle: "Rendered strictly on the server with zero JavaScript sent to the client bundle."

2. **Main Content (Pillar 1 - Streaming & Suspense):**
   - UI Title: "Streaming SSR with Suspense"
   - Subtitle: "Progressive rendering where static shell loads instantly and heavy data streams concurrently."

3. **Interactive Panel (Pillar 2 - Pre-populated State & Clean Hydration):**
   - UI Title: "Zustand Request-Scoped Hydration"
   - Subtitle: "Initial server payload synchronized into client store without duplicate fetches or hydration mismatches."
     </ui_architecture_and_ux>
