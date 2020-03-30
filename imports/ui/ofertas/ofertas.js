
import './ofertas.html';
import { Ofertas } from '../../api/ofertas.js';

Template.ofertas.helpers({
  /*ofertas: [
    db.ofertas.insert({ title: 'This is a great deal 1', restaurant: 'The Krusty Crab',description: 'buy 1 Krabby patty get 1 free', initialDate: new Date() , finalDate: new Date(Date.now() + (7*24*60*60*1000))}),
    { title: 'This is a great deal 2', description: 'buy 2 KrustyCrab get 1 free' },
    { title: 'This is a great deal 3', description: 'buy 3 KrustyCrab get 1 free' },
  ],*/
  ofertas(){
    return Ofertas.find({});
  }
});

