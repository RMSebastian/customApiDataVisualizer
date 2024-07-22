export type CharacterApiResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
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
  episode: string[];
};
export type Episode = {
  id: string;
  name: string;
};
export type ExtraResource = {
  name: string;
  url: string;
};

export type ErrorApiResponse = {
  error: string;
  message: string;
}
