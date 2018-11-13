import { Injectable } from "@angular/core";

import { RecipeService } from "../recipes/recipe.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
       return this.http.put('https://ng-recipe-book-6bbe5.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://ng-recipe-book-6bbe5.firebaseio.com/recipes.json');
    }

}