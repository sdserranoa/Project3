import './menus.html';
import Menus from '../../api/menus';

Template.menu.helpers({
    menusCollection: function () {
        let menus = Menus.find({});
        console.log(menus);
        return Menus.find({});
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
    }
});