import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Koshary',
      'the traditional Meal',
      '../../../assets/Images/Recipeees/egypt-food-1-1920x750.jpg'
    ),
    new Recipe(
      'Kofta',
      'Grilled meat Balls ',
      '../../../assets/Images/Recipeees/Kofta.png'
    ),
    new Recipe(
      'Shawermma',
      'tastey meat with onion',
      '../../../assets/Images/Recipeees/Shawarma.png'
    ),
  ];
}
