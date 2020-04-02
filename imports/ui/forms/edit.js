import './edit.html';

Template.perfil.helpers({
    
    username: () => {
        
        return Meteor.user().username;
    },
    userEmail: () => {
       
        return Meteor.user().emails[0].address;
    },
    name: () => {
       
        return Meteor.user().profile.name;
    },
    edad: () => {
       
        return Meteor.user().profile.edad;
    }
});

Template.perfil.events({
    'submit form': (event) =>{ 
        event.preventDefault();
        var nameVar = event.target.username.value;
       
        var emailVar = event.target.email.value;
        var nombreVar = event.target.name.value;
        var edadVar = event.target.edad.value;
        console.log("Form submitted.");
    


     Meteor.users.update({_id: Meteor.user()._id}, 
     {$set: {"username": nameVar,"emails[0].address":emailVar,"profile.name":nombreVar,"profile.edad":edadVar}})
    
        FlowRouter.redirect("/");
    } ,
    'reset form': (event) =>{ 
        FlowRouter.redirect("/");
    },
    'click button': (event) =>{ 
        Meteor.users.remove(Meteor.user()._id);
        FlowRouter.redirect("/");
    }
});
