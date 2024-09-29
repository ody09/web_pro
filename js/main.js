import { auth } from "./global.js";

// if(isUserSignedIn){
//     if (window.location.pathname !== '/signup') {
//         window.location.href = "../index.html";  // Change to your main page URL
//       }
// }
const logOutbtn = document.getElementById("logOutbtn");
logOutbtn.addEventListener("click", () => {
    auth.signOut()
    .then(() => {
      // Sign-out successful, redirect to login page or show a message
      console.log("User logged out");
      window.location.href = "../signin.html";  // Change to your login page URL
    })
    .catch((error) => {
      // An error occurred during sign out
      console.log("Error logging out: " + error.message);
})})

