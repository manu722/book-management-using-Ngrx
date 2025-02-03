import { Component, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ReceipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrl: './recipes-detail.component.scss'
})
export class RecipesDetailComponent {

 @Input() receipe:Recipe;

 constructor(private recipeservice:ReceipeService){

 }
 onshoppinglistClick(){
    this.recipeservice.addIngredientstoShoppinglist(this.receipe.ingredients);
 }

}
