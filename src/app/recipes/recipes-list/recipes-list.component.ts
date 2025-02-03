import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ReceipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent {
 recipes: Recipe[];
  constructor(private recipeSerivce:ReceipeService){

  }

  ngOnInit(){
    this.recipes=this.recipeSerivce.getRecipes();
  }
 
}
