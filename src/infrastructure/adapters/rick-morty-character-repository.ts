import type { Character, CharacterStatus } from "@/domain/character";
import type { CharacterRepository } from "@/application/ports/character-repository";

type RickMortyCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  image: string;
};

type RickMortyResponse = {
  info: { count: number; pages: number };
  results: RickMortyCharacter[];
};

function mapCharacter(character: RickMortyCharacter): Character {
  const status: CharacterStatus =
    character.status === "Alive" || character.status === "Dead"
      ? character.status
      : "unknown";

  return {
    id: character.id,
    name: character.name,
    status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: character.origin.name,
    location: character.location.name,
    image: character.image,
  };
}

export function createRickMortyCharacterRepository(): CharacterRepository {
  return {
    async list() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character?page=1",
        { next: { revalidate: 3600 } },
      );

      if (!response.ok) {
        throw new Error(`Rick and Morty API responded with ${response.status}`);
      }

      const data = (await response.json()) as RickMortyResponse;

      return {
        info: data.info,
        results: data.results.map(mapCharacter),
      };
    },
  };
}
