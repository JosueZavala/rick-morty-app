export type Results = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
};

export type CharactersProps = {
  results: Results[];
  count?: number;
  currentPage?: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
};

export type PaginationProps = {
  count?: number;
  currentPage: number;
  currentSize?: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export type CharactersCardProps = {
  name: string;
  species: string;
  status: string;
  image: string;
};

export const statusCharacters = {
  alive: "Alive",
  dead: "Dead",
  unknown: "unknown",
};

export const StatusColor = {
  [statusCharacters.alive]: "text-green-500",
  [statusCharacters.dead]: "text-red-500",
  [statusCharacters.unknown]: "text-purple-400",
};

export type charactersParam = {
  name?: string;
  status?: string;
  page?: number;
};

export type FiltersProps = {
  register: any;
  control: any;
  onClearFilter(): void;
};

export const options = [
  { value: "alive", label: "Alive" },
  { value: "dead", label: "Dead" },
  { value: "unknown", label: "unknown" },
];
