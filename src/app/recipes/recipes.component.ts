import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { ReceipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  providers:[ReceipeService]
})
export class RecipesComponent implements OnInit {

  selectedReceipe:Recipe;

 constructor(private receipeService:ReceipeService){

 }

 ngOnInit(){
    this.receipeService.recipeSelected.subscribe((recipe:Recipe)=>{
      this.selectedReceipe = recipe;
    });
 }
}
