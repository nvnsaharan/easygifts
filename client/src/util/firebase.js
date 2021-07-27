import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDyQhVfmWDvvtzUAmAijCGlc0pSu6igS2o",
    authDomain: "easygifts-62087.firebaseapp.com",
    projectId: "easygifts-62087",
    storageBucket: "easygifts-62087.appspot.com",
    messagingSenderId: "840663755012",
    appId: "1:840663755012:web:0bd1c297c95b396f9f8851"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
