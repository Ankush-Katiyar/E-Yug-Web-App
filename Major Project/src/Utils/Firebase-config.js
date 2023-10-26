import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtNiHzyUj9pL9gTRhtwXCuSB9_33UtVHc",
  authDomain: "e-yug-7a9da.firebaseapp.com",
  projectId: "e-yug-7a9da",
  storageBucket: "e-yug-7a9da.appspot.com",
  messagingSenderId: "616351644850",
  appId: "1:616351644850:web:2848bfcef153920a105dab",
  measurementId: "G-LJPBX8V0H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
