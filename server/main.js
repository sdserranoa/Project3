import { Meteor } from 'meteor/meteor';
import '../imports/api/ofertas.js';
import Menus from '../imports/api/menus';

Meteor.startup(() => {
  Meteor.users.allow({
    update: function (userId, doc) {
      console.log('UPDATE USER');
      return true;
    }
  });
  // code to run on server at startup
});
