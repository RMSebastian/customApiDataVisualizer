import { TableData } from "../../components/DetailTable/DetailTable";
import { Character, Episode } from "../../interfaces/Character";
import { GetIdFromURL } from "../../utils/stringConverter";
import { fetchData } from "./fetchService";

export const getCharacterData = async (
  character: Character
): Promise<TableData[]> => {
  const getFirstEpisode = async () => {
    const data = await fetchData<Episode>(character!.episode[0]);

    if('error' in data){
      return 'not found';
    }
    else{
      return data.name;
    }
    
  };

  const firstEpisode: string =
    character.episode.length != 0 ? await getFirstEpisode() : "No one";

  return [
    {
      field: "Name",
      value: character.name,
    },
    {
      field: "Status",
      value: character.status,
    },
    {
      field: "Species",
      value: character.species,
    },
    {
      field: "Gender",
      value: character.gender,
    },
    {
      field: "Origin",
      value: character.origin.name,
    },
    {
      field: "Location",
      value: character.location.name,
    },
    {
      field: "First Episode",
      value: firstEpisode,
    },
    {
      field: "Episodes",
      value: getEpisodesNumbers(character.episode),
    },
  ];
};

export const getStatusData = () => {
  return [
    {
      field: "Alive",
      value: "alive",
    },
    {
      field: "Dead",
      value: "dead",
    },
    {
      field: "Unknown",
      value: "unknown",
    },
  ];
};
export const getGenderData = () => {
  return [
    {
      field: "Female",
      value: "female",
    },
    {
      field: "Male",
      value: "male",
    },
    {
      field: "Genderless",
      value: "genderless",
    },
    {
      field: "Unknown",
      value: "unknown",
    },
  ];
};
export const getEpisodesNumbers = (episodes: string[]): string => {
  let listOfEpisodes: string = "";
  episodes.map((element, index, array) => {
    element = GetIdFromURL(element);
    listOfEpisodes +=
      index == array.length - 1 ? `${element}` : `${element} - `;
  });
  return listOfEpisodes;
};
