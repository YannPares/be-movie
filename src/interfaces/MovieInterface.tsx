type Genres = {
    name: string;
  };
  
  export interface Movie {
    name: string;
    image: string;
    score: number;
    genres: Genres[];
    id: string;
    type: "watchlist" | "watched";
  }