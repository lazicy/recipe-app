import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService { 

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Writing description seeing it milion times', 'https://www.mojirecepti.com/slike/cokoladni-kruh.jpg', 
        [new Ingredient('Test', 2), new Ingredient('Test', 4)]),
        
        new Recipe('Petarda', 'Petarda sarajevskog uvek dobro dodje.', 'https://i0.wp.com/donesikm.com/wp-content/uploads/2017/05/cevapi-1.jpg',
        [new Ingredient('Govedina', 10), new Ingredient('Somun', 1), new Ingredient('Luk', 5)]),
        
      ];

      getRecipes() {
          return this.recipes.slice();
      }
    
}