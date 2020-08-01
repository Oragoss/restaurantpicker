import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'eat-in-the-village';
  // public sortByCuisine: Boolean = false;
  // public sortByAlphabeticalOrder: Boolean = false;
  public showInitialSortQuestion: Boolean = true;

  constructor() {
  }

  ngOnInit() {

  }

  sortByCuisine() {
    console.log("Cuisine!");

    this.showInitialSortQuestion = false;
  }

  sortByAlphabeticalOrder() {
    console.log("A-z!!");
    this.showInitialSortQuestion = false;
  }

  startOver() {
    this.showInitialSortQuestion = true;
  }
}
