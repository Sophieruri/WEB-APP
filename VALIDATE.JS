function validateEmail(email){
    // Basic email validation regex (can be improved)
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 if (typeof email !== "string") {
   console.log("Invalid email: Must be a string");
   return false;
 }

 if (!emailRegex.test(email)) {
   console.log("Invalid email format");
   return false;
 }

 console.log("Valid email");
 return true;
}
function validateUsername(username) {
   // Check if username is a string
   if (typeof username !== 'string') {
     return false;
   }
 
   // Check length
   if (username.length < 3 || username.length > 20) {
     return false;
   }
 
   // Check character set
   const allowedChars = /^[a-zA-Z0-9_]+$/;
   if (!allowedChars.test(username)) {
     return false;
   }
 
   return true;
 }
module.exports= {validateEmail ,validateUsername}

//const myModVad= require ("./VALIDATE.JS")

//console.log(myModVad.validateEmail("alber @#eldohub.com"));//false
//console.log(myModVad.validateEmail("albert@eldohub.co.ke"));//true
//console.log(myModVad.validateUsername(12));//false
//console.log(myModVad.validateUsername("sandra"));//true
