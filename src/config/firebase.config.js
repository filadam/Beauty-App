import firebase from 'firebase';
import "firebase/auth";

  var config = {
    apiKey: "AIzaSyAegmL6Mg2_GtAyV5Htexb6AEzJ69dwDxY",
    authDomain: "projektfiladam.firebaseapp.com",
    databaseURL: "https://projektfiladam.firebaseio.com",
    projectId: "projektfiladam",
    storageBucket: "projektfiladam.appspot.com",
    messagingSenderId: "351211230753",
    appId: "1:351211230753:web:2e7de9f23fea8b19"
  }

  const Fire = firebase.initializeApp(config);
  export default Fire;