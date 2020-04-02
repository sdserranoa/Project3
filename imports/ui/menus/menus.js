import './menus.html';
import Menus from '../../api/menus';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.menu.helpers({
    menu: function () {
        let restaurantID = FlowRouter.getParam('id');
        console.log("Cargar menu: " + restaurantID);
        let menu = Menus.find({ "idRestaurant": restaurantID });
        console.log(menu);
        return menu;
    },

    formatPrice: function (price) {
        let priceString = String(price);
        let formattedPrice = "$";

        console.log(price);
        console.log(priceString);

        if (price >= 100000) {
            formattedPrice += priceString.substr(0, 3) + "." + priceString.substr(3, 3);
        } else if (price >= 10000) {
            formattedPrice += priceString.substr(0, 2) + "." + priceString.substr(2, 3);
        } else if (price >= 1000) {
            formattedPrice += priceString.substr(0, 1) + "." + priceString.substr(1, 3);
        } else {
            formattedPrice += String(price);
        }

        console.log(formattedPrice);
        return formattedPrice;
    },

    hasMenu: function () {
        let restaurantID = FlowRouter.getParam('id');
        console.log("Has menu: " + restaurantID);
        return Menus.findOne({ "idRestaurant": restaurantID }) !== undefined;
    }
});