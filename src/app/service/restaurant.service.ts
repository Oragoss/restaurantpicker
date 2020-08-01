import { Injectable } from '@angular/core';
import restaurants from '../../assets/list-of-restaurants.js';
import { Restaurant } from '../models/Restaurant.js';
import { RestaurantListItem } from '../models/RestaurantListItem.js';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  // restaurantList: Restaurant[];

  constructor() { }

  getRestaurantsByCuisine(): RestaurantListItem[] {
    const restaurantList = restaurants.sort(this.sortByCuisine);
    let cuisines = this.getCuisines();
    let uniqueRestaurants = [];

    for(let x = 0; x < cuisines.length; x++) {
      for(let y = 0; y < restaurantList.length; y++) {
        if(restaurantList[y].cuisine === cuisines[x]) {
          let newRestaurant: RestaurantListItem = new RestaurantListItem;
          newRestaurant.Name = restaurantList[y].name;
          newRestaurant.Category = restaurantList[y].cuisine;
          newRestaurant.Description = restaurantList[y].description;
          uniqueRestaurants.push(newRestaurant);
        }
      }
    }
    return uniqueRestaurants;
  }

  getCuisines() {
    let unique = [...new Set(restaurants.map(item => item.cuisine))];
    return unique;
  }

  sortByCuisine(a, b) {
    if (a["cuisine"] === b["cuisine"]) {
        return 0;
    }
    else {
        return (a["cuisine"] < b["cuisine"]) ? -1 : 1;
    }
  }
}
