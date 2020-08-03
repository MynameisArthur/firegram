import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBh7bJc0nP2POUcw6HxskHtOX1KB65-YaQ',
    authDomain: 'firegram-ea539.firebaseapp.com',
    databaseURL: 'https://firegram-ea539.firebaseio.com',
    projectId: 'firegram-ea539',
    storageBucket: 'firegram-ea539.appspot.com',
    messagingSenderId: '974877752014',
    appId: '1:974877752014:web:4e2bc108786418f4d12e9f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};
