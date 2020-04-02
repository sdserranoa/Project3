import './calificacion.html';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Calificaciones } from '../../api/calificaciones.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';

/**
Meteor.startup(() => {
    if (Calificaciones.find().count() === 0) {
        console.log("There are no profiles");
        let dummyProfiles = [
            { titulo: "Mariela Garcia", texto: "Mariela Garcia", stars: 2 },
            { titulo: "Fabio Garcia", texto: "Mariela Garcia", stars: 2 },
            { titulo: "Gustavo Garcia", texto: "Mariela Garcia", stars: 2 },
            { titulo: "Elvia Garcia", texto: "Mariela Garcia", stars: 2 },
        ];

        dummyProfiles.forEach(e => {
            Calificaciones.insert(e);
        })
    }
}) */

Template.calificacion.helpers({
    calificaciones() {
        var ids = parseInt(FlowRouter.getParam(id));
        var calificaciones = Calificaciones.find({id:ids});
        console.log("calificaciones");
        return calificaciones;
    },
    check_admin(e) { return e == 'admin' },

});

Template.formRev.events({
    'submit .form': function() {
        event.preventDefault();
        console.log("calificaciones");
        var target = event.target;
        var title = target.title.value;
        var des = target.description.value;
        var star = target.stars.value;
        var today = new Date();
        

        Calificaciones.insert({
            owner: Meteor.userId(),
            titulo: title,
            texto: des,
            stars: star
        });
    }
});