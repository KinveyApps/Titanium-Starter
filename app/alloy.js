// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

var Kinvey = Alloy.Globals.Kinvey = require('kinvey-titanium-sdk');

Kinvey.init({
  appKey: 'kid_HkTD2CJc',
  appSecret: 'cd7f658ed0a548dd8dfadf5a1787568b'
});

// Kinvey.User.logout()
//   .catch(function(error) {
//     conosle.log(error);
//   })
//   .then(function() {
//     return Kinvey.User.loginWithMIC('http://localhost:3000');
//   })
//   .catch(function(error) {
//     console.log(error);
//     return Kinvey.User.getActiveUser();
//   })
//   .then(function(user) {
//     var store = Kinvey.DataStore.collection('books');
//     return store.find().toPromise();
//   })
//   .then(function(books) {
//     console.log(books);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
