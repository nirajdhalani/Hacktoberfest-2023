//Install bcrypt.js using : npm i bcrypt

const bcrypt = require("bcrypt");

//This function will hash the given password and store it in hashedPassword
const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 9);
};


//Verify our password, bcrypt has a method called compare.
const isMatch = bcrypt.compare ( 
    'myPassword' , hashedPassword
);

// 'myPassword'  is the user password.
// hashedPassword is the hashed password from the database.

if (isMatch){
    console.log('Logged in');
} else {
    console.log('Incorrect Password');
}
