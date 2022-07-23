import { initializeApp } from "firebase/app";
import { getFirestore, query, collection, where, getDocs, addDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider,FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, updateProfile } from "firebase/auth";
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
const auth = getAuth();


const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};







const RegisterWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        updateProfile(user ,{displayName:name})
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};



const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    RegisterWithEmailAndPassword,
    sendPasswordReset,
    logout,
    
};

