// Global library to hold values
userLibrary = new Map();

// User constructor function
const user = function(email, password, passwordConfirm) {
    this.email = email;
    this.password = password;
    this.passwordConfirm = passwordConfirm;
    this.isVerified = false;
    this.isSignedIn = false;
    return this;
}

  // Sign up function
  signUp(user) {
    if (typeof userLibrary.set(user.email) != "undefined") {
      console.log("Thank you for signing up!");
      save(user);
      user.isVerified = true;
    }
  }

  // Save function
  save(user) {
    userLibrary.set(user.email, user);
  }

  //sign-in function
  signIn(user) {
    if (typeof userLibrary.get(user.email) != "undefined") {
      user.authenticate(user.email, user.password);
      console.log("Welcome");
    } else {
      console.log("Sorry, wrong credentials. Please try again");
    }
  }

  //sign out function
  signOut(user) {
    if (user.isSignedIn) {
      user.isSignedIn = false;
      console.log("You have been signed out");
    }
  }

  // function to change password
  changePassword(previous, next) {
    if (previous === userLibrary.get(user.email).password) {
      user.password = next;
      console.log("Password change successful!");
    }
  }

  // authenticate user function
  authenticate(email, password) {
    if (userLibrary.get(email).password === password) {
      user.isVerified = true;
      user.isSignedIn = true;
    }
  }
  module.exports = (user, signIn, SignUp, signOut, changePassword)