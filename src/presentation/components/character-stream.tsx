import { createRickMortyCharacterRepository } from "@/infrastructure/adapters/rick-morty-character-repository";
import CharacterExplorer from "./character-explorer";

export default async function CharacterStream() {
  const repository = createRickMortyCharacterRepository();
  const page = await repository.list();
  return <CharacterExplorer initialCharacters={page.results} total={page.info.count} />;
}
