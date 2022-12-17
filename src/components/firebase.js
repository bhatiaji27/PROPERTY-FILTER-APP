// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqvI4vj6YgfQ7BnJtuuaVmcmSDLPz1h1w",
  authDomain: "property-log-auth.firebaseapp.com",
  projectId: "property-log-auth",
  storageBucket: "property-log-auth.appspot.com",
  messagingSenderId: "288842160019",
  appId: "1:288842160019:web:69394292ad7f4a215f3a66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;