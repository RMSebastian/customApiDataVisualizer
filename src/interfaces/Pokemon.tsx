export type PokemonListApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ExtraResource[];
};
export type Pokemon = {
  id: string;
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[]; //1 extra data
  //abilities
  //stats
  //moves
};
export type PokemonSprites = {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
};
export type PokemonType = {
  slot: number;
  type: ExtraResource;
};
export type PokemonStats = {
  stat: ExtraResource;
  effort: number;
  base_stat: number;
}
export type ExtraResource = {
  name: string;
  url: string;
};
