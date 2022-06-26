import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDst6_rz4fTqw68_4adjr3-o0hoVZwco0U",
    authDomain: "alfred-d13b5.firebaseapp.com",
    projectId: "alfred-d13b5",
    storageBucket: "alfred-d13b5.appspot.com",
    messagingSenderId: "403697578777",
    appId: "1:403697578777:web:a5bb5b3fc9b12e1fba0b88",
    measurementId: "G-7E4K1J15ZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db