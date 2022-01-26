export interface Game {
  id: string;
  background_image: string;
  name: string;
  released: string;
  metacriticUrl: string;
  website: string;
  description: string;
  slug: string;
  tags: tag[];
  metacritic: number;
  genres: Genre[];
  parent_platforms: ParentPlatform[];
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
    slug: string;
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

interface tag {
  name: string;
}

interface Trailer {
  data: {
    max: string;
  };
}
