export interface Game {
  id: string;
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  description_raw: string;
  website: string;
  description: string;
  slug: string;
  tags: tag[];
  metacritic: number;
  genres: Genre[];
  platforms: Platforms[];
  parent_platforms: ParentPlatform[];
  publishers: Publishers[];
  ratings: Rating[];
  screenshots: Screenshot[];
  trailers: Trailers[];
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    slug: string;
  };
}

interface Platforms {
  platform: {
    name: string;
  };
}

interface Publishers {
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

interface Trailers {
  data: {
    max: string;
  };
}
