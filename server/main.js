import { Meteor } from 'meteor/meteor';
import '../imports/api/ofertas.js';

Meteor.startup(() => {
  Meteor.users.allow({
    update: function (userId, doc) {
        console.log('UPDATE USER');
        return true; 
    }
});
});
