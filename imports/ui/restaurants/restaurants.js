
import './restaurants.html';
import { Restaurants } from '../../api/restaurants.js';
import { Meteor } from 'meteor/meteor';


let filters ={
  filterByKidsAllowed: false,
  filterByCookingType: false,
  filterByEnvironment: false,
  kidsAllowedFilter: true,
  cookingTypeFilter: 'Rapida',
  environmentFilter: 'Familiar',
}

Template.restaurants.helpers({
  restaurants() {
    var restaurants = Restaurants.find();
    let arreglo = [];
    restaurants.forEach(function (restaurant) {
      let addRestaurant = true;
      if (filterByKidsAllowed) {
        var kidsAllowed = restaurant.kidsAllowed;
        if (kidsAllowed  ==! kidsAllowedFilter) {
          addRestaurant = false;
        }
      }
      if (filterByCookingType && addRestaurant) {
        var cookingType = restaurant.cookingType;
        if (cookingType  ==! cookingTypeFilter) {
          addRestaurant = false;
        }
      }
      if (filterByEnvironment && addRestaurant) {
        var environment = restaurant.environment;
        if (environment  ==! environmentFilter) {
          addRestaurant = false;
        }
      }
      if(addRestaurant){
        arreglo.push(restaurant);
      }
    })
    return arreglo;
  },
  check_admin (e) { return e == 'admin' },
});


Template.filters.events({
  'submit .filters': function() {
    event.preventDefault();

    const target = event.target;

    const filterByKidsAllowed = target.filterByKidsAllowed.checked;
    const filterByCookingType = target.filterByCookingType.checked;
    const filterByEnvironment = target.filterByEnvironment.checked;

    const kidsAllowedFilter = target.kidsAllowedFilter.checked;
    const cookingTypeFilter = target.cookingTypeFilter.value;
    const environmentFilter = target.environmentFilter.value;

    filters ={
      filterByKidsAllowed: filterByKidsAllowed,
      filterByCookingType: filterByCookingType,
      filterByEnvironment: filterByEnvironment,
      kidsAllowedFilter: kidsAllowedFilter,
      cookingTypeFilter: cookingTypeFilter,
      environmentFilter: environmentFilter,
    }

  },
});


Template.form.events({
  'submit .form': function() {
    event.preventDefault();

    const target = event.target;
    const name = target.name.value;
    const adress = target.adress.value;
    const phoneNumber = target.phoneNumber.value;
    const environment = target.environment.value;
    const cookingType = target.cookingType.value;
    const kidsAllowed = target.kidsAllowed.checked;
    const description = target.description.value;
    let url=" "+target.url.value;
    url = url.slice(url.lastIndexOf("\\")+1,url.length);
    url = "./images/"+url;

    Restaurants.insert({
      name: name,
      adress: adress,
      phoneNumber: phoneNumber,
      environment: environment,
      cookingType: cookingType,
      kidsAllowed: kidsAllowed,
      description: description,
      url: url,
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });

    // Clear form
    target.name.value = '';
    target.adress.value = '';
    target.phoneNumber.value = '';
    target.kidsAllowed.checked = true;
    target.environment.value = 'Familiar';
    target.cookingType.value = 'Rapida';
    target.description.value = '';
    target.url.value = '';
  },
});
Template.restaurant.events({
  'click .delete': function() {
    Restaurants.remove(this._id);
  },

});
Template.restaurant.helpers({
  check_admin (e) { return e == 'admin' },
})


