import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  template: `
    <form class="d-flex d-inline" role="search">
      <input
        #inputSearch
        autofocus
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        (keyup)="onSearch(inputSearch.value)"
      />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  `,
  styles: ['input {width:100%}'],
})
export class SearchBoxComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(value: string) {
    if (value && value.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    }
  }
}
