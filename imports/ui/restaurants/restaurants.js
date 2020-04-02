
import './restaurants.html';
import { Restaurants } from '../../api/restaurants.js';
import { Meteor } from 'meteor/meteor';

Template.restaurants.helpers({
  restaurants() {
    var restaurants = Restaurants.find();
    console.log(restaurants);
    return restaurants;
  },
  check_admin (e) { return e == 'admin' },
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


    Restaurants.insert({
      name: name,
      adress: adress,
      phoneNumber: phoneNumber,
      environment: environment,
      cookingType: cookingType,
      kidsAllowed: kidsAllowed,
      description: description,
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });

    // Clear form
    target.name.value = '';
    target.adress.value = '';
    target.phoneNumber.value = '';
    target.description.value = '';

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


