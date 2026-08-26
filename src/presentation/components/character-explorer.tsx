"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { create } from "zustand";
import type { Character, CharacterStatus } from "@/domain/character";

type Filter = "All" | CharacterStatus;

type ExplorerStore = {
  characters: Character[];
  total: number;
  filter: Filter;
  query: string;
  setFilter: (filter: Filter) => void;
  setQuery: (query: string) => void;
};
//** Initial State Injection o Payload Serialization: */
/*** Zustand vs Redux: Zero boilerplate, no Providers or reducers. Direct simplicity*/
const createExplorerStore = (initialCharacters: Character[], total: number) =>
  create<ExplorerStore>((set) => ({
    characters: initialCharacters,
    total,
    filter: "All",
    query: "",
    setFilter: (filter) => set({ filter }),
    setQuery: (query) => set({ query }),
  }));

export default function CharacterExplorer({
  initialCharacters,
  total,
}: {
  initialCharacters: Character[];
  total: number;
}) {
  const [useExplorerStore] = useState(() => createExplorerStore(initialCharacters, total));

  // ***** ensuring Zustand factory creates the store exactly once when the component mounts the client, avoiding recreating it on every render. ********
  return <ExplorerView useExplorerStore={useExplorerStore} />;
}

function ExplorerView({
  useExplorerStore,
}: {
  useExplorerStore: ReturnType<typeof createExplorerStore>;
}) {
  const { characters, total, filter, query, setFilter, setQuery } = useExplorerStore();
  const normalizedQuery = query.toLowerCase().trim();
  const filteredCharacters = characters.filter((character) => {
    const matchesFilter = filter === "All" || character.status === filter;
    const matchesQuery = character.name.toLowerCase().includes(normalizedQuery);
    return matchesFilter && matchesQuery;
  });

  return (
    <section className="explorer" aria-labelledby="explorer-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="live-dot" /> live payload</p>
          <h2 id="explorer-title">Characters in the wire</h2>
        </div>
        <div className="payload-chip"><span>{total}</span> records available</div>
      </div>
      <div className="explorer-tools">
        <div className="filters" role="group" aria-label="Filter characters by status">
          {(["All", "Alive", "Dead", "unknown"] as Filter[]).map((option) => (
            <button
              className={filter === option ? "filter active" : "filter"}
              key={option}
              onClick={() => setFilter(option)}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
        <label className="search-box">
          <span className="search-icon">⌕</span>
          <span className="sr-only">Search characters</span>
          <input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search payload..."
            value={query}
          />
          <kbd>⌘ K</kbd>
        </label>
      </div>
      <div className="character-grid">
        {filteredCharacters.slice(0, 6).map((character) => (
          <article className="character-card" key={character.id}>
            <div className="character-image-wrap">
              <img src={character.image} alt={character.name} className="character-image" />
              <span className={`status status-${character.status.toLowerCase()}`}>
                <span /> {character.status}
              </span>
            </div>
            <div className="character-body">
              <div>
                <h3>{character.name}</h3>
                <p>{character.species} · {character.gender}</p>
              </div>
              <span className="card-arrow">↗</span>
            </div>
          </article>
        ))}
      </div>
      {filteredCharacters.length === 0 && <p className="empty-state">No characters match this query.</p>}
      <p className="hydration-note"><span>↳</span> Filtered locally from the serialized server payload. No second API request.</p>
    </section>
  );
}
