/* Project: */
// Step 1: create variables to store information: DONE
// Step 2: create a function to verify information: IN PROGRESS
// Step 3: TBA
// Step 4: Test project: IN PROGRESS
// Project: IN PROGRESS

// Step 1: create variables to store information
let firstName;
let firstNameLength
let lastName;
let lastNameLength;
let addressOne 
let addressOneLength;
let addressTwo; // not required; no length variable needed 
let city
let cityLength;
let state
let stateLength;
let zipCode
let zipCodeLength;
let age
let ageLength; 

// Step 2: create a function to verify information
function verifyInfo(){
  firstName = document.getElementById("firstName").value;
  firstNameLength = firstName.length;
  lastName = document.getElementById("lastName").value;
  lastNameLength = lastName.length;
  lastName = document.getElementById("lastName").value;    
  addressOne = document.getElementById("addressOne").value;
  addressOneLength = addressOne.length;
  // addressTwo = document.getElementById("addressTwo").value;
  // city = document.getElementById("city").value;
  // state = document.getElementById("state").value;
  // zipCode = document.getElementById("zipCode").value;
  age = document.getElementById("age").value;
  integerAge = parseInt(age) // changes the value (that is string) to an integer

// Step 2. a) Verify the conditions of firstName
  if (firstNameLength < 5){ 
    // the input field cannot be empty nor less than 5 characters
    alert("The first name must be at least 5 characters.")
  } else {
      console.log("Success! The first name was accepted.");
      document.getElementById("firstName").value = "";
  }

// Step 2. b) Verify the conditions of lastName 
if (firstNameLength < 5){ 
  // the input field cannot be empty nor less than 5 characters
  alert("The first name must be at least 5 characters.")
} else {
    console.log("Success! The first name was accepted.");
    document.getElementById("firstName").value = "";
}









  if (age.length < 2){
    alert("The age must be 2 integers.");
  } else {
    console.log("Success! The age was accepted.");
  }
  // console.log("The first name is " + firstName + ".");
  // console.log("The age is " + age + ".");
  // console.log("---------------------------------------------------");

// 
  // document.getElementById("firstName").value = "";
  // document.getElementById("lastName").value = "";
  // document.getElementById("addressOne").value = "";
  // document.getElementById("addressTwo").value = "";
  // document.getElementById("city").value = "";
  // document.getElementById("state").value = "";
  // document.getElementById("zipCode").value = "";
  // document.getElementById("age").value = "";
} 
