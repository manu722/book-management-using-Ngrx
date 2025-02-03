import { EventEmitter } from "@angular/core";
import { ingredient } from "../shared/ingredient.model";

export class ShoppingService{
    ingredients:ingredient[]=[new ingredient('apples',5),new ingredient('tomatotes',6)];
    indegredientAdded = new EventEmitter<ingredient[]>()

    getIngrediants(){
       return this.ingredients.slice();
    }
    indegredientAdd(ingredient:ingredient){
        this.ingredients.push(ingredient);
        this.indegredientAdded.emit(this.ingredients.slice());
     }

     addIngredients(ingredients:ingredient[]){
    //    for(let ingredient of ingredients){
    //     this.indegredientAdd(ingredient);
    //    }
      this.ingredients.push(...ingredients);
      this.indegredientAdded.emit(this.ingredients.slice());
     }
}