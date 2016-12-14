// The following action launches the application in the foreground and requires the device to be unlocked
if (Ti.App && Ti.App.iOS) {
  var acceptAction = Ti.App.iOS.createUserNotificationAction({
    identifier: "ACCEPT_IDENTIFIER",
    title: "Accept",
    activationMode: Ti.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND,
    destructive: false,
    authenticationRequired: true
  });

  // The following action will only activate the application in the background, requires the device to be unlocked, and may have a red background.
  var rejectAction = Ti.App.iOS.createUserNotificationAction({
    identifier: "REJECT_IDENTIFIER",
    title: "Reject",
    activationMode: Ti.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND,
    destructive: true,
    authenticationRequired: true
  });

  var invitationCategory = Ti.App.iOS.createUserNotificationCategory({
    identifier: "INVITE_CATEGORY",
    // The following actions will be displayed for an alert dialog
    actionsForDefaultContext: [acceptAction, rejectAction],
    // The following actions will be displayed for all other notifications
    actionsForMinimalContext: [acceptAction, rejectAction]
  });
}

function doClick(e) {
  Kinvey.User.logout()
    .then(function() {
      // return Kinvey.User.loginWithMIC('http://localhost:3000');
      return Kinvey.User.login('test', 'test');
    })
    .catch(function(error) {
      console.log('here002', error);
      return null;
    })
    .then(function(user) {
      return Kinvey.Push.register();
    })
    .catch(function(error) {
      console.log('here001', error);
    });
}

// Kinvey.Push.onNotification(function(notification) {
//   alert(JSON.stringify(notification));
// });

if (Ti.App && Ti.App.iOS) {
  Ti.App.iOS.addEventListener('remotenotificationaction', function(e) {
    // Switch for categories
    switch (e.category) {
      case "INVITE_CATEGORY":
        // Switch for actions
        switch (e.identifier) {
          case "ACCEPT_IDENTIFIER":
            alert('accept');
            break;
          case "REJECT_IDENTIFIER":
            alert('reject');
            break;
        }
        break;
      // more categories...
      default:
        break;
    };
  });
}

$.index.open();
