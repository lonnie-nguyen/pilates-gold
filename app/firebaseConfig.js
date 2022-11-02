import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBisPSivNdIbVZLAIMV8nsFLrg2puO8UGg",
    authDomain: "pilates-gold.firebaseapp.com",
    projectId: "pilates-gold",
    storageBucket: "pilates-gold.appspot.com",
    messagingSenderId: "564222310930",
    appId: "1:564222310930:web:25d5d8014592fd6a4a36cb",
    measurementId: "G-5F53N4CHX3"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)