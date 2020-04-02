import { Meteor } from 'meteor/meteor';
//import '../imports/api/ofertas.js';
import Menus from '../imports/api/menus';
import {Ofertas}  from '../imports/api/ofertas';

import '../imports/api/restaurants.js';

Meteor.startup(() => {
  Meteor.users.allow({
    update: function (userId, doc) {
        console.log('UPDATE USER');
        return true;
    },
    remove: function (userId, doc) {
      console.log('DELETE USER');
      return true;
    }
});
  // code to run on server at startup

  //Menus
  if (Menus.find().count() === 0) {
    console.log("There are no menus");
    let dummyMenus = [
      {
        "id": 1,
        "categories": [
          {
            "name": "Entradas",
            "dishes": [
              {
                "name": "Entrada 1",
                "description": "Descripcion de la entrada 1",
                "price": 12000
              },
              {
                "name": "Entrada 2",
                "description": "Descripcion de la entrada 2",
                "price": 15000
              },
              {
                "name": "Entrada 3",
                "description": "Descripcion de la entrada 3",
                "price": 13000
              }
            ]
          },
          {
            "name": "Pastas",
            "dishes": [
              {
                "name": "Pasta 1",
                "description": "Descripcion de la pasta 1",
                "price": 22000
              },
              {
                "name": "Pasta 2",
                "description": "Descripcion de la pasta 2",
                "price": 25000
              },
              {
                "name": "Pasta 3",
                "description": "Descripcion de la pasta 3",
                "price": 30000
              }
            ]
          },
          {
            "name": "Postres",
            "dishes": [
              {
                "name": "Postre 1",
                "description": "Descripcion del postre 1",
                "price": 8000
              },
              {
                "name": "Postre 2",
                "description": "Descripcion del postre 2",
                "price": 10000
              }
            ]
          }
        ]
      }
    ];

    dummyMenus.forEach(e => {
      Menus.insert(e);
    })
  }
//Ofertas.remove({},console.log("todas las ofertas have been removed"));
console.log(Ofertas.find({}).count() );
if (Ofertas.find({}).count() <= 3) {
  console.log("There are no ofertas");
  const hoyCompleto = new Date();
  const futuroCompleto = new Date(Date.now() + (7 * 24 * 60 * 60 * 1000));
  let ofertasI = [
    {
      "title":"La mejor pormoción bajo el mar",
      "description":"buy 1 Krabby patty get 1 free",
      "restaurant":"The Krusty Crab",
      "initialDate":hoyCompleto,
      "finalDate":futuroCompleto,
      "owner": "server",
      "username": "server",
      "url": "./images/KrabbyPatty.jpg"
    },
    {
      "title":"La mejor pormoción bajo el mar en pareja",
      "description":"buy 2 Krabby patty get 1 free",
      "restaurant":"The Krusty Crab",
      "initialDate":hoyCompleto,
      "finalDate":futuroCompleto,
      "owner": "server",
      "username": "server",
      "url": "./images/KrabbyPatty.jpg"
    },{
      "title":"La mejor pormoción bajo el mar para la familia",
      "description":"buy 3 Krabby patty get 1 free",
      "restaurant":"The Krusty Crab",
      "initialDate":hoyCompleto,
      "finalDate":futuroCompleto,
      "owner": "server",
      "username": "server",
      "url": "./images/KrabbyPatty.jpg"
    }
  ];
  ofertasI.forEach(e => {
    Ofertas.insert(e);
  })
}
});
