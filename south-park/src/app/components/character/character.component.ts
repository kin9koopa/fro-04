import { Component } from '@angular/core';
import { CharacterService } from 'src/app/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  constructor(public characterService: CharacterService){}

  handleSubmit(e: any){
    
  }

}
