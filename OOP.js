// Global library to hold values
userLibrary = new Map();

// User constructor function
class User {
  constructor(email, password, passwordConfirm) {
    this.email = email;
    this.password = password;
    this.passwordConfirm = passwordConfirm;
    this.isVerified = false;
    this.isSignedIn = false;
  }

  // Sign up function
  signUp() {
    if (typeof userLibrary.set(this.email) != "undefined") {
      console.log("Thank you for signing up!");
      this.save();
      this.isVerified = true;
    }
    return this;
  }

  // Save function
  save() {
    userLibrary.set(this.email, this);
    return this;
  }

  //sign-in function
  signIn() {
    if (typeof userLibrary.get(this.email) != "undefined") {
      this.authenticate(this.email, this.password);
      console.log("Welcome");
    } else {
      console.log("Sorry, wrong credentials. Please try again");
    }
    return this;
  }

  //sign out function
  signOut() {
    if (this.isSignedIn) {
      this.isSignedIn = false;
      console.log("You have been signed out");
    }
  }

  // function to change password
  changePassword(previous, next) {
    if (previous === userLibrary.get(this.email).password) {
      this.password = next;
      console.log("Password change successful!");
    }
    return this;
  }

  // authenticate user function
  authenticate(email, password) {
    if (userLibrary.get(email).password === password) {
      this.isVerified = true;
      this.isSignedIn = true;
    }
    return this;
  }

  // password confirm function
  passwordConfirm(password) {
    console.log("Please confirm your password");
    if (this.password === password) {
      console.log("Password is good");
    }
    return this;
  }
}

// creating a new user
let user = new User("ivantrincon", "ravioli", "ravioli");
user.signUp();
user.signIn();
user.signOut();
user.changePassword("ravioli", "formuoli");
