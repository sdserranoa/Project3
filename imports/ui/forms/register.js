import Users from "../collections";
Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var nameVar = event.target.registerName.value;
        var usernameVar = event.target.registerUsername.value;
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        var ageVar = event.target.registerAge.value;
        console.log("Form submitted.");
        Accounts.createUser({
            email: emailVar,
            password: passwordVar,
            profile:{
                name: nameVar,
                username: usernameVar,
                age: ageVar
            }
        });
    }
});