import './edit.html';
Template.perfil.helpers({
    
    username: () => {
        
        return Meteor.user().username;
    },
    userEmail: () => {
       
        return Meteor.user().emails[0].address;
    }
});

Template.perfil.events({
    'submit form': (event) =>{ 
        event.preventDefault();
        var nameVar = event.target.username.value;
        console.log(event.target.username.value)
        var emailVar = event.target.email.value;
        console.log("Form submitted.");
    


     Meteor.users.update({_id: Meteor.user()._id}, {$set: {"username": nameVar,"emails[0].address":emailVar}})
    
        FlowRouter.redirect("/");
    } ,
    'reset form': (event) =>{ 
        FlowRouter.redirect("/");
    }
});
