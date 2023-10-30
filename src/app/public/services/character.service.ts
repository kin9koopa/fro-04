import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character } from '../interface/character-i';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  searchCharacter(query = '', page = 1) {
    return this.http.get<Character[]>(
      `${environment.baseUrlApi}/?name${query}&page=${page}`
    );
  }

  getDetails(id: number) {
    return this.http.get<Character>(`${environment.baseUrlApi}/${id}`);
  }
}
