export type CharacterStatus = "Alive" | "Dead" | "unknown";

export type Character = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
};

export type CharacterPage = {
  info: {
    count: number;
    pages: number;
  };
  results: Character[];
};
