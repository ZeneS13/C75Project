import firebase from 'firebase';
require('@firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyADJJ08jZurFO3ONGhRw94gXUKEOQzpg6I",
    authDomain: "c71project-81096.firebaseapp.com",
    projectId: "c71project-81096",
    storageBucket: "c71project-81096.appspot.com",
    messagingSenderId: "388848185152",
    appId: "1:388848185152:web:0ab719cad38f9f5279d4a5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
