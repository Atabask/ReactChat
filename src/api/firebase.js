import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"


const firebaseConfig = {
    apiKey: "AIzaSyC5Gd9vUBS3JNN1xEDIXtuQfbKSC3y_D50",
    authDomain: "reactchat-2bd5d.firebaseapp.com",
    databaseURL: "https://reactchat-2bd5d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reactchat-2bd5d",
    storageBucket: "reactchat-2bd5d.appspot.com",
    messagingSenderId: "601492293034",
    appId: "1:601492293034:web:501b3c46ab5c2a74c1d7d3",
    measurementId: "G-63KZER76TN"
  };

export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);