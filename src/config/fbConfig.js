import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyAEU-MgDGTX0PEEDCzEw7eTXfMFl3517NU",
    authDomain: "net-ninja-marioplan-41a50.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-41a50.firebaseio.com",
    projectId: "net-ninja-marioplan-41a50",
    storageBucket: "net-ninja-marioplan-41a50.appspot.com",
    messagingSenderId: "528294578865",
    appId: "1:528294578865:web:6623b83f0e51c9b31c7090",
    measurementId: "G-8DS7H4T8HH"
  };

  
  const firebaseApp = firebase.initializeApp(config);
  export const firestore = firebaseApp.firestore();
  export default firebase;
  