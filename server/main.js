import { Meteor } from 'meteor/meteor';
import '../imports/api/ofertas.js';

Meteor.startup(() => {
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
                "precio": 12000
              },
              {
                "name": "Entrada 2",
                "description": "Descripcion de la entrada 2",
                "precio": 15000
              },
              {
                "name": "Entrada 3",
                "description": "Descripcion de la entrada 3",
                "precio": 13000
              }
            ]
          },
          {
            "name": "Pastas",
            "dishes": [
              {
                "name": "Pasta 1",
                "description": "Descripcion de la pasta 1",
                "precio": 22000
              },
              {
                "name": "Pasta 2",
                "description": "Descripcion de la pasta 2",
                "precio": 25000
              },
              {
                "name": "Pasta 3",
                "description": "Descripcion de la pasta 3",
                "precio": 30000
              }
            ]
          },
          {
            "name": "Postres",
            "dishes": [
              {
                "name": "Postre 1",
                "description": "Descripcion del postre 1",
                "precio": 8000
              },
              {
                "name": "Postre 2",
                "description": "Descripcion del postre 2",
                "precio": 10000
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
});
