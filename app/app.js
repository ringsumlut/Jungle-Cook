function initFirebase() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("connected");
    } else {
      console.log("user is not there");
    }
  });
}
// document.getElementById("hey").innerHTML = firstname + "Hey";
const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstname = signUpForm["firstname"].value;
  const lastname = signUpForm["lastname"].value;
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log(
        "First Name: " + firstname + ",",
        "Last Name: " + lastname + ",",
        "Email: " + email
      );
      alert("Welcome " + firstname);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      console.log(errorMessage);
    });
});

const signInForm = document.querySelector("#signin-form");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signInForm["signin-email"].value;
  const password = signInForm["signin-password"].value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      alert("Signed In ");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorMessage);
    });
});
