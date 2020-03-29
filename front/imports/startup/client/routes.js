import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
//import '../imports/ui/layouts/';
// Import to load these templates
//import '../../ui/layouts/app-body.js';
import '../../ui/layouts/app-body.js';
import '../../ui/layouts/Test.js';


FlowRouter.route('/', {
    action: function() {
      console.log('entra a la ruta / y va a renderizar');
      BlazeLayout.render('App_body', { main: 'Test' });
      console.log('entra a la ruta / y va a renderizar 2');
    }
  });
  
  FlowRouter.route('/test', {
    action: function() {

      BlazeLayout.render('test', { main: 'Test' });
    }
  });
  
  FlowRouter.route('/home', {
    action: function() {
      BlazeLayout.render('layout', { main: 'HomeLayout' });
    }
  });