import { URL } from "../../utils/exports";

export const fetchData = async <T,>(url: string): Promise<T> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
//CharacterList.tsx
export const fetchCharacters = async <T,>(
  searchPrompt: URLSearchParams,
  pages: number
): Promise<T> => {
  const GetqueryParams = () => {
    let queryState: string = "";

    for (const [key, value] of searchPrompt.entries()) {
      queryState += `&${key}=${value}`;
    }
    return queryState;
  };

  const params: string = GetqueryParams();
  const url: string =
    params == ""
      ? `${URL}/character?page=${pages}`
      : `${URL}/character?page=${pages}${params}`;

  const data = await fetchData<T>(url);
  return data;
};
