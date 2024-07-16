export type CharacterApiResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[]
};
export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: ExtraResource;
  location: ExtraResource;
  image: string;
};
export type ExtraResource = {
  name: string;
  url: string;
};
