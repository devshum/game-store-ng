import { Game } from './game.interface';

export interface GameResponse {
  results: Game[];
  count: number;
  seo_title: string;
}

