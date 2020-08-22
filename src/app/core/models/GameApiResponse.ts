import { GameItem } from './game-item';

export interface GameApiResponse {
  status: string;
  totalResults: number;
  articles: GameItem[];
}
