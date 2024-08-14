// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTCmasZLkXe-4ZWKfR_o910LqKuhIvgE8",
  authDomain: "memoraize-9aab6.firebaseapp.com",
  projectId: "memoraize-9aab6",
  storageBucket: "memoraize-9aab6.appspot.com",
  messagingSenderId: "1028077298123",
  appId: "1:1028077298123:web:f35538811e24446b0dd64e",
  measurementId: "G-JX03155L69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);