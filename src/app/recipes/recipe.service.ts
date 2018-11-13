import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class RecipeService { 

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Writing description seeing it milion times', 'https://www.mojirecepti.com/slike/cokoladni-kruh.jpg', 
        [new Ingredient('Test', 2), new Ingredient('Test', 4)]),
        
        new Recipe('Petarda', 'Petarda sarajevskog uvek dobro dodje.', 'https://i0.wp.com/donesikm.com/wp-content/uploads/2017/05/cevapi-1.jpg',
        [new Ingredient('Govedina', 10), new Ingredient('Somun', 1), new Ingredient('Luk', 5)]),
        
      ];

      recipesChanged = new Subject<Recipe[]>();

      // ,slice() makes a copy
      getRecipes() {
          console.log(this.recipes);
          return this.recipes.slice();
      }

      getRecipe(id: number) {
          return this.recipes[id];
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.getRecipes());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.getRecipes());
      }

      deleteRecipe(index: number) {
          console.log(this.recipes[index].name);
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.getRecipes());
      }

      setRecipes(newRecipes: Recipe[]) {
          this.recipes = newRecipes;
          this.recipesChanged.next(this.getRecipes());
      }
    
}