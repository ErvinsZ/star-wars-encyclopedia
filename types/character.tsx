export interface Character {
    id:string;
    name: string;
    birthYear: string;
    gender:string;
    species: {
      name: string;
    };
    homeworld: {
      name: string;
      climate: string;
    };
    filmConnection: {
      films: Film[];
    };
  }

export interface Film{
    id:string;
    title:string;
}
