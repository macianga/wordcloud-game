// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWuuyHOOwhTK6tqzg-nGoXmNE5gH8zkHM",
  authDomain: "wordcloud-maciek.firebaseapp.com",
  databaseURL: "https://wordcloud-maciek-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wordcloud-maciek",
  storageBucket: "wordcloud-maciek.appspot.com",
  messagingSenderId: "787354503342",
  appId: "1:787354503342:web:4d0135d365dec15fb0853f",
  measurementId: "G-BQ4R97GE1V"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);