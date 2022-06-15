import { useQuery } from "react-query";
import { charactersParam } from "../typings/application";
import { httpClient } from "../utils/http";

export const useCharacters = (
  name = "",
  status = "",
  page = 1,
  refetchOnWindowFocus = false
) => {
  const params: charactersParam = {};
  if (page > 1) {
    params["page"] = page;
  }
  if (name) {
    params["name"] = name;
  }
  if (status) {
    params["status"] = status;
  }

  return useQuery(
    "Characters",
    async () =>
      httpClient
        .get(`/character/`, { params })
        .then((res) => res.data)
        .catch((error) => console.log(error)),
    { refetchOnWindowFocus }
  );
};
