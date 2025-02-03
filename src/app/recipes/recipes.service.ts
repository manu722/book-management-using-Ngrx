import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";


@Injectable()

export class ReceipeService{
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[]=[ new Recipe('a','sdsadsadsdsd','https://th.bing.com/th?id=OIF.DnzhWhgpR2Wylue%2bjiNJfg&rs=1&pid=ImgDetMain',[new ingredient('meat',1),new ingredient('fries',10)]),new Recipe('b','sdsadsadsdsd','https://th.bing.com/th?id=OIF.DnzhWhgpR2Wylue%2bjiNJfg&rs=1&pid=ImgDetMain',[new ingredient('buns',2),new ingredient('meat',1)])];
  
    constructor(private slservice:ShoppingService){

   }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientstoShoppinglist(ingredients:ingredient[]){
      this.slservice.addIngredients(ingredients);
    }
}