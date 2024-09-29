import { auth, signInWithEmailAndPassword } from "./global.js";

const loginForm = document.getElementById('signin-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login successful
            console.log('User logged in:', userCredential.user);
            window.location.href = 'index.html'; 
        })
        .catch((error) => {
            console.error('Error during login:', error.message);
        });
});