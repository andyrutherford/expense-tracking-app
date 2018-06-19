import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA7i-T6RiGkaMtC5Lwn2k8FjBsVo7CF70A",
    authDomain: "expense-tracker-59d3e.firebaseapp.com",
    databaseURL: "https://expense-tracker-59d3e.firebaseio.com",
    projectId: "expense-tracker-59d3e",
    storageBucket: "expense-tracker-59d3e.appspot.com",
    messagingSenderId: "304259529249"
  };

  firebase.initializeApp(config);

  firebase.database().ref().set({
    name: 'Shaq'
  });