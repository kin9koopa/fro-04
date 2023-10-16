import { Component } from '@angular/core';
import { CharacterService } from 'src/app/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  constructor(public characterService: CharacterService){}

  titleSection : string = 'Your Favorite Characters'


  handleSubmit(e: any){
    e.preventDefault();
    this.titleSection = e.target['titleSection'].value
    e.target['titleSection'].value = ''
  }

}
