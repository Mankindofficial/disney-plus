import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDI7EyA2QyXUPs2YG66AvF-mf1qaT2aLX4",
    authDomain: "disneyplus-clone-ee812.firebaseapp.com",
    projectId: "disneyplus-clone-ee812",
    storageBucket: "disneyplus-clone-ee812.appspot.com",
    messagingSenderId: "1037807763761",
    appId: "1:1037807763761:web:e32a61d0721ec7a0adb010",
    measurementId: "G-H6JXXS4FGN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
