import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model"

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Poha", 1.5),
    new Ingredient("Peanuts", .5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
