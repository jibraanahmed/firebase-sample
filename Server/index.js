var admin = require("firebase-admin");
var serviceAccount = require("../Server/notification-config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function sendMsgs() {
  try {
    var payload = {
      "notification": {
        "title": "Sample project",
        "body": "hello world 1.0"
      }
    };

    let response = await admin.messaging().sendToDevice("registrationTokens", payload);

    if (response.successCount > 0) {
      console.log("Notification Sent Successfully...");
    }
  }
  catch (error) {
    console.log(error)
  }
}
sendMsgs();