import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';

import { filter, take } from 'rxjs';
import { Character } from 'src/app/public/interface/character-i';
import { CharacterService } from 'src/app/public/services/character.service';

type RequestInfo = {
  next: string | null;
};

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  info: RequestInfo = {
    next: null,
  };
  private pageNum = 1;
  private query: string | undefined;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // this.getDataFromService();
    this.getCharactersByQuery();
  }

  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.characters = [];
        this.pageNum = 1;
        this.getCharactersByQuery();
      });
  }

  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params: any) => {
      console.log('params ', params);
      this.query = params['q'];
      this.getDataFromService();
    });
  }

  private getDataFromService(): void {
    this.characterService
      .searchCharacter(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.characters = [...this.characters, ...results];
          this.info = info;
        } else {
          this.characters = [];
        }
      });
  }
}
