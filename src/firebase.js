import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBph3MuKllkpvRrsnXSTWZHBALVp71SApc',
  authDomain: 'jalaram-traders-contact.firebaseapp.com',
  databaseURL: 'https://jalaram-traders-contact-default-rtdb.firebaseio.com',
  projectId: 'jalaram-traders-contact',
  storageBucket: 'jalaram-traders-contact.appspot.com',
  messagingSenderId: '25469075425',
  appId: '1:25469075425:web:a69cc682ccf1ec2b32dca0',
  measurementId: 'G-RCBMXTTJLJ',
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
