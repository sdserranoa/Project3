import './HomeLayout.html';
import Restaurants from '../../../api/restaurants';

let restaurants = [];

Template.HomeLayout.onCreated(function() { 
    /*restaurants = Restaurants.find({});
    console.log(restaurants);*/
});

Template.HomeLayout.helpers({
    restaurantCollection: function() {
        
    }
});