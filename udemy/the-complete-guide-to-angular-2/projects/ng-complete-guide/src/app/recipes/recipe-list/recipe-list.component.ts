import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static.pourfemme.it/pfricette/fotogallery/pp/850x480/34345/carpaccio-di-zucchine-con-crostini.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static.pourfemme.it/pfricette/fotogallery/pp/850x480/34345/carpaccio-di-zucchine-con-crostini.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
