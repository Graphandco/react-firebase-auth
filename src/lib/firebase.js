import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Import seed file once
//import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyADU-WFLEM3Ut56DkcJuEK_1ECYljJs5zg",
    authDomain: "react-graph-and-co.firebaseapp.com",
    projectId: "react-graph-and-co",
    storageBucket: "react-graph-and-co.appspot.com",
    messagingSenderId: "115750261672",
    appId: "1:115750261672:web:f7a5aeb0038d2297ec439d"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//Call seed file
//seedDatabase(firebase);

export { firebase, FieldValue };