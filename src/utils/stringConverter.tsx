export const GetIdFromURL = (url: string): string => {
  return url.substring(url.lastIndexOf("/") + 1, url.length);
};
