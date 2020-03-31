import './edit.html';
Template.perfil.helpers({
    
    user: () => {
        console.log(Meteor.user())
        return Meteor.user();
    }
});