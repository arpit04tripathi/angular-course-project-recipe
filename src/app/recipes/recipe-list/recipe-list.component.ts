import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Poha","How to make poha","https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/poha-500x500.jpg", 12),
    new Recipe("Pasta","Asli Pasta, not sasta pasta","https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 8)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
