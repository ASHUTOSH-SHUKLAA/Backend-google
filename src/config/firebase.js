const admin = require("firebase-admin");

function getFirebaseAuth() {
  if (!admin.apps.length) {
    const options = { credential: admin.credential.applicationDefault() };
    if (process.env.FIREBASE_PROJECT_ID) options.projectId = process.env.FIREBASE_PROJECT_ID;
    admin.initializeApp(options);
  }
  return admin.auth();
}

module.exports = { getFirebaseAuth };
