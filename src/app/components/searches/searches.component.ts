import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MealSearch } from '../../models/meal-search.model';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-searches',
  imports: [CommonModule],
  templateUrl: './searches.component.html',
  styleUrl: './searches.component.css'
})
export class SearchesComponent implements OnInit{

  mealSearches: MealSearch[] = [];

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.loadMealSearches()
  }

  loadMealSearches() {
    this.mealService.getMealSearches().subscribe((data) => {
      this.mealSearches = data
    })
  }
}

