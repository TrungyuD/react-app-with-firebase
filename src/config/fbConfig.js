import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyDxJcnYnSQhliQ-ctMouzKiztAtfcdf3_U",
    authDomain: "manage-project-personal.firebaseapp.com",
    databaseURL: "https://manage-project-personal.firebaseio.com",
    projectId: "manage-project-personal",
    storageBucket: "manage-project-personal.appspot.com",
    messagingSenderId: "56706370913",
    appId: "1:56706370913:web:e992f283d16547fe3a8920",
    measurementId: "G-18MVB48MM0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})
  // firebase.analytics();

export default firebase;
