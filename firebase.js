
// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } 
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBYIZ7y34zRUVERo6TqLoSz5hdvA8wKEno",
  authDomain: "videoappasses.firebaseapp.com",
  projectId: "videoappasses",
  storageBucket: "videoappasses.firebasestorage.app",
  messagingSenderId: "870359407088",
  appId: "1:870359407088:web:9da504fea6cda836d12535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
