import { Injectable } from '@angular/core';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characters : Character[] = []

  constructor() { 
    fetch('https://spapi.dev/api/characters').then(res => res.json()).then(data => this.characters = data.data)
  }
}
