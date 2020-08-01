import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';
import { Restaurant } from '../models/Restaurant';
import { RestaurantListItem } from '../models/RestaurantListItem';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  // public cuisines ;
  public restaurantListItem: RestaurantListItem[];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurantsByCuisine();
    // this.getCuisines();
  }

  getRestaurantsByCuisine() {
    this.restaurantListItem = this.restaurantService.getRestaurantsByCuisine();
  }

  // getCuisines() {
  //   this.cuisines = this.restaurantService.getCuisines();
  // }
}
