import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameItem } from '../models/game-item';
import { map } from 'rxjs/operators';
import { GameApiResponse } from '../models/GameApiResponse';
import { environment } from 'src/environments/environment';

@Injectable()
export class GameService {

  constructor(private http: HttpClient) {
  }

  getData(): Observable<GameItem[]> {
    return this.http.get<GameApiResponse>(`/api/game`).pipe(
      map((words: GameApiResponse) => words.articles)
    );
  }
}
