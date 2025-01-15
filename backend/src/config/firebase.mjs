// src/config/firebase.js
import admin from 'firebase-admin';
import serviceAccount from './path-to-service-account-key.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
