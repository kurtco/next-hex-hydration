import type { CharacterPage } from "@/domain/character";

export interface CharacterRepository {
  list(): Promise<CharacterPage>;
}
