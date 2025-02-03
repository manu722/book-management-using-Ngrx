import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;

constructor(private shoppingservice:ShoppingService){

}
  onAddClick(){
   const ingredientName = this.nameInputRef.nativeElement.value;
   const ingredientAmount = this.amountInputRef.nativeElement.value; 
   const newIngredient = new ingredient(ingredientName,ingredientAmount);
   this.shoppingservice.indegredientAdd(newIngredient);
  }

}
