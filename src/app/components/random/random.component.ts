import { Component, OnInit } from '@angular/core';
import { Meal, MealInfo } from '../../models/meal.model';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent implements OnInit {

  myMeals: Meal
  mealScelto: MealInfo

  constructor(private mealService: MealService) {
    this.myMeals = new Meal
    this.mealScelto = new MealInfo
  }

  ngOnInit(): void {
    this.onClickMealRetriever()
  }

  onClickMealRetriever() {
    this.mealService.getRandomMeal().subscribe((data) => {
      this.mealScelto = this.myMeals.meals[0]
      this.mealScelto = data.meals[0]
    })
  }
}