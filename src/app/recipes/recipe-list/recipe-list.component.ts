import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Writing description seeing it milion times', 'https://www.mojirecepti.com/slike/cokoladni-kruh.jpg'),
    new Recipe('Petarda', 'Petarda sarajevskog uvek dobro dodje.', 'https://i0.wp.com/donesikm.com/wp-content/uploads/2017/05/cevapi-1.jpg'),
    
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
