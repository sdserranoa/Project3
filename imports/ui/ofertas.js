import { Template } from 'meteor/templating';
import './ofertas.html';
//import { getAllOfertas } from '../../../mongodb/mongodblib.js';

Template.ofertas.helpers({
  ofertas: [
    { title: 'This is a great deal 1', description: 'buy 1 KrustyCrab get 1 free' },
    { title: 'This is a great deal 2', description: 'buy 2 KrustyCrab get 1 free' },
    { title: 'This is a great deal 3', description: 'buy 3 KrustyCrab get 1 free' },
  ],
  ofertasCollection: () => {
    return getAllOfertas;
  }
});

