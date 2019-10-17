const library = require("./fpmodule");

const user = library.user();
library.signUp(user);
library.SignIn(user);
library.signOut(user);
library.changePassword(user);
