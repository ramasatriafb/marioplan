import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBXYaZSD4_42hPGYTArCE-7HCo7gDLhNgI",
    authDomain: "net-ninja-marioplan-firman.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-firman.firebaseio.com",
    projectId: "net-ninja-marioplan-firman",
    storageBucket: "net-ninja-marioplan-firman.appspot.com",
    messagingSenderId: "1063646642635"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots:true });

export default firebase;