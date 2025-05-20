// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf0LpYlk3GacWO--CQZbD7Yf1tD4ZeKpY",
  authDomain: "mini-e-commerce-81945.firebaseapp.com",
  projectId: "mini-e-commerce-81945",
  storageBucket: "mini-e-commerce-81945.firebasestorage.app",
  messagingSenderId: "922217041565",
  appId: "1:922217041565:web:9e1fec29f27e8e18a90e74",
  measurementId: "G-N6SHTXF7YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {
  production: false,
  firebase: firebaseConfig
}
