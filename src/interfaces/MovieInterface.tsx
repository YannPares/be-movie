export interface Genres  {
    id: number;
    name: string;
    movies: Movie[];
  };
  
  export interface Movie {
    id: string;
    name: string;
    image: string;
    score: number;
    genres: Genres[];
    type: "watchlist" | "watched";
  }

  export interface User {
    id :string;
    name: string;
    email: string;
    movies  :  Movie[]
  }