// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
apiKey: "AIzaSyCSXWS4Pr7mQXBJfOgtlYfQJJkevdp3BQI",
authDomain: "instagram-clone-react-12976.firebaseapp.com",
projectId: "instagram-clone-react-12976",
storageBucket: "instagram-clone-react-12976.appspot.com",
messagingSenderId: "920244728799",
appId: "1:920244728799:web:256a976da53b9cfd574a6a",
measurementId: "G-8JZPXG0F7J"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };