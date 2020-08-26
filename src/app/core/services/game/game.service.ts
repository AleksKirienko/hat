import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameItem } from '../../models/game-item';

@Injectable()
export class GameService {

  constructor(private http: HttpClient) {
  }

  public getWords(): Observable<GameItem> {
    return this.http.get<GameItem>(`/api/game`);
  }
}
