import './HomeLayout.html';
import '../../restaurants/restaurants.js';
import { Restaurants } from '../../../api/restaurants';

let restaurants = [];

/*
Template.HomeLayout.onCreated(function () {
    restaurants = Restaurants.find({});
    console.log("a var" + Restaurants.find({}));

    console.log(restaurants);
});
*/

/*Template.HomeLayout.helpers({
    restaurantCollection() {
        var restaurants = Restaurants.find();
        console.log(restaurants);
        return restaurants;
    }
});*/