import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent implements OnInit {
  ingredients=[]

  constructor(private shoppingservice:ShoppingService){
    
  }
  ngOnInit() {
    this.ingredients = this.shoppingservice.getIngrediants();
    this.shoppingservice.indegredientAdded.subscribe((res)=>{
      this.ingredients=res;
    })
  }

}
