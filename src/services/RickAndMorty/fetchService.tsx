import { URL } from "../../utils/exports";

export const fetchData = async <T,>(url: string): Promise<T> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
//CharacterList.tsx
export const fetchCharacters = async <T,>(
  searchPrompt: string | null,
  pages: number
): Promise<T> => {
  const url: string =
    searchPrompt == ""
      ? `${URL}/character?page=${pages}`
      : `${URL}/character?page=${pages}&name=${searchPrompt}`;

  const data = await fetchData<T>(url);

  return data;
};
