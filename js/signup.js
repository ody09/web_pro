
import { auth, createUserWithEmailAndPassword } from "./global.js";

    
const signupForm = document.getElementById("signup-form");
const signLabel = document.getElementById("sign-label");

const signupInputs = document.querySelectorAll("input"); 

signupInputs.forEach(input => {
    input.addEventListener("focus", () => {
        signupForm.classList.add('slide-up');
        signLabel.classList.add("fading")

    })
});

signupInputs.forEach(input => {
    input.addEventListener("blur", () => {
        signupForm.classList.remove('slide-up')
        signLabel.classList.remove("fading")
    })
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Sign-up successful
            console.log('User signed up:', userCredential.user);
            window.location.href = 'index.html'; 
        })
        .catch((error) => {
            console.error('Error during sign-up:', error.message);
        });
});
