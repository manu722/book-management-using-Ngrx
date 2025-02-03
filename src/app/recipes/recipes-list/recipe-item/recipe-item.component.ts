import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { ReceipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})

export class RecipeItemComponent {
  @Input() receipe: Recipe;
  constructor(private recipeService:ReceipeService){

  }


  onRecipeClick(event){
    this.recipeService.recipeSelected.emit(this.receipe)
   
  }
}
