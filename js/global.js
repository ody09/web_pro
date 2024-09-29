// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBsGrL-UUw8MOXp1fjmQj161Llu9KaOkXk",
    authDomain: "website-project-e02e0.firebaseapp.com",
    projectId: "website-project-e02e0",
    storageBucket: "website-project-e02e0.appspot.com",
    messagingSenderId: "588053153998",
    appId: "1:588053153998:web:e25fb008782ce166cba89f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Use getAuth for Firebase Authentication

// // user state
//     let isUserSignedIn = auth.onAuthStateChanged((user) => {
//         if (user) {
//           // User is logged in, redirect to main page
//           window.location.href = "index.html";
//           console.log("User logged in");  // Change to your main page URL
//         } else {
//           // User is not logged in, maybe stay on login page
//           console.log("User not logged in");
//           window.location.href = "signup.html";
//         }

//         return user;
//       });


  
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut};

