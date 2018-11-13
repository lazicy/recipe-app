import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    
    constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) {}

    onSaveData() {
        console.log("ping");
        this.dataStorageService.storeRecipes().subscribe(
          (response) => console.log(response),
          (error) => console.log(error)  
        );
    }

    onFetchData() {
        this.dataStorageService.getRecipes().subscribe(
            (recipes: Recipe[]) => {
                for (let r of recipes) {
                    if (!r['ingredients']) {
                        r.ingredients = [];
                        console.log(r.name);
                    }
                }

                this.recipeService.setRecipes(recipes);
            }
        );
    }
   
}



   