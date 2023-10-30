import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';

@NgModule({
  declarations: [CharacterDetailsComponent, CharacterListComponent],
  imports: [CommonModule, RouterModule],
  exports: [CharacterDetailsComponent, CharacterListComponent],
})
export class CharactersModule {}
