import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDwpH0L2x8wsHgFoGurfdjJRY0TiODe_I0",
    authDomain: "ara-manga.firebaseapp.com",
    databaseURL: "https://ara-manga.firebaseio.com",
    projectId: "ara-manga",
    storageBucket: "ara-manga.appspot.com",
    messagingSenderId: "298083886222",
    appId: "1:298083886222:web:4ffbe704e57a899a7cd5df",
    measurementId: "G-93YW841GQZ"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;