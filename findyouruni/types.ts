
export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  process: string[];
  mistakes: string[];
  idealFor: string;
}

export interface Destination {
  id: string;
  name: string;
  system: string;
  types: string;
  cost: string;
  work: string;
  visa: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
}
