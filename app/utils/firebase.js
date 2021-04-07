import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCZ6Bnjsl6busLcZspBn1bXTwIjuxzohLw",
    authDomain: "smart-eats-80b23.firebaseapp.com",
    projectId: "smart-eats-80b23",
    storageBucket: "smart-eats-80b23.appspot.com",
    messagingSenderId: "1011804601423",
    appId: "1:1011804601423:web:f08640aafae6687c797e3a"
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);
