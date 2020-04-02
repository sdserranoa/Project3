
import './ofertas.html';
import { Ofertas } from '../../api/ofertas.js';
import { Meteor } from 'meteor/meteor';

Template.ofertas.helpers({
  /*ofertas: [
    db.ofertas.insert({ title: 'This is a great deal 1', restaurant: 'The Krusty Crab',description: 'buy 1 Krabby patty get 1 free', initialDate: new Date() , finalDate: new Date(Date.now() + (7*24*60*60*1000))}),
    { title: 'This is a great deal 2', description: 'buy 2 KrustyCrab get 1 free' },
    { title: 'This is a great deal 3', description: 'buy 3 KrustyCrab get 1 free' },
  ],*/
  ofertas() {
    let arreglo = [];
    var myCursor = Ofertas.find({}, { sort: { initialDate: -1 } });
    //revisa si la oferta sigue vigente para mostrarla todos los usuarios.
    myCursor.forEach(function (e) {
      if (e) {
        var myFinalDate = e.finalDate;
        if (myFinalDate >= new Date()) {
          arreglo.push(e);
        }
      }
    })
    return arreglo;
  },
  check_admin (e) { return e == 'admin' },
});

Template.formato.events({
  'submit .new-oferta': function() {
    console.log('entra al evento submit .new-oferta')
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    const target = event.target;
    const title1 = target.title.value;
    const description1 = target.description.value;
    const restaurant1 = target.restaurant.value;
    let url3=" "+target.url.value;
    const url2 = url3.slice(url3.lastIndexOf("\\")+1,url3.length);
    const url1 = "./images/"+url2;
    const hoyCompleto = new Date();
    //const hoySimple = hoyCompleto.getDay()+hoyCompleto.getMonth() + hoyCompleto.getFullYear();
    const futuroCompleto = new Date(Date.now() + (7 * 24 * 60 * 60 * 1000));
    //const futuroSimple = futuroCompleto.getDay()+futuroCompleto.getMonth() + futuroCompleto.getFullYear();
    console.log('esta a punto de insertar');
    Ofertas.insert({
      title: title1,
      description: description1,
      restaurant: restaurant1,
      initialDate: hoyCompleto, // current time
      finalDate: futuroCompleto,
      owner: Meteor.userId(),
      username: Meteor.user().username,
      url: url1

    });
    // Clear form
    target.title.value = '';
    target.description.value = '';
    target.restaurant.value = '';
    target.url.value = '';
  },
});
Template.oferta.events({
  'click .delete': function() {
    Ofertas.remove(this._id);
  },
  
});
Template.oferta.helpers({
  check_admin (e) { return e == 'admin' },
})

