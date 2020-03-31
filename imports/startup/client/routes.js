import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
//import '../imports/ui/layouts/';
// Import to load these templates
//import '../../ui/layouts/app-body.js';
import '../../ui/layouts/app-body.js';
import '../../ui/layouts/Test.html';
import '../../ui/layouts/HomeLayout.html';
import '../../ui/ofertas/ofertas.js';
import '../../ui/forms/register.js';

FlowRouter.route('/', {
  action: function () {
    BlazeLayout.render('App_body', { main: 'HomeLayout' });
  }
});

FlowRouter.route('/home', {
  action: function () {
    BlazeLayout.render('layout', { main: 'HomeLayout' });
  }
});

FlowRouter.route('/ofertas', {
  action: function () {
    BlazeLayout.render('App_body', { main: 'ofertas' });
  }
});

FlowRouter.route('/register', {
  name: 'Register.show',
  action() {
    BlazeLayout.render('App_body', { main: 'register' });
  }
});
