export interface GameResponse {
  background_image: string;
  name: string;
  released: string;
  metacriticUrl: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Genre[];
  parentPlatforms: ParentPlatform[];
  publishers: Publisher[];
  ratings: Rating[];
  screenshots: Screenshot[];
  trailers: Trailer[];
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    name: string;
  };
}

interface Publisher {
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
}

interface Screenshot {
  image: string;
}

interface Trailer {
  data: {
    max: string;
  };
}