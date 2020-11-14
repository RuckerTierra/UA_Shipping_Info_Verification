/* Project: Verify information*/
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
let addressTwo; // addressTwo length variable is not needed
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
  // firstName
  firstName = document.getElementById("firstName").value;
  firstNameLength = firstName.length;
  // lastName 
  lastName = document.getElementById("lastName").value;
  lastNameLength = lastName.length;
  lastName = document.getElementById("lastName").value;
  // addressOne
  addressOne = document.getElementById("addressOne").value;
  addressOneLength = addressOne.length;
  // addressTwo
  addressTwo = document.getElementById("addressTwo").value; // addressTwo length variable is not needed
  // city
  city = document.getElementById("city").value;
  cityLength = city.length;
  // state
  state = document.getElementById("state").value;
  stateLength = state.length;
  // zipCode
  zipCode = document.getElementById("zipCode").value;
  zipCodeLength = zipCode.length;
  // age
  age = document.getElementById("age").value;
  integerAge = parseInt(age) // changes the value (that is string) to an integer


// Step 2. a) Verify the conditions of firstName
  if (firstNameLength < 5){ 
    // the input field cannot be empty nor less than 5 characters
    alert("The first name must be at least 5 characters.")
  } else {
      console.log("Success! The first name, " + firstName + ", was accepted.");
      document.getElementById("firstName").value = "";
  }

// Step 2. b) Verify the conditions of lastName 
if (lastNameLength < 5){ 
  // the input field cannot be empty nor less than 5 characters
  alert("The last name must be at least 5 characters.")
} else {
    console.log("Success! The last name, " + lastName + ", was accepted.");
    document.getElementById("lastName").value = "";
}

// Step 2. c) Verify the conditions of addressOne 
if (addressOneLength < 5){ 
  // the input field cannot be empty nor less than 5 characters
  alert("The address one must be at least 5 characters.")
} else {
    console.log("Success! The addressOne, " + addressOne + ", was accepted.");
    document.getElementById("addressOne").value = "";
}

// Step 2. d) Verify the conditions of addressTwo >> This is not required
// no function needed

// Step 2. e) Verify the conditions of city
if (cityLength < 5){ 
  // the input field cannot be empty nor less than 5 characters
  alert("The city must be at least 5 characters.")
} else {
    console.log("Success! The city, " + city + ", was accepted.");
    document.getElementById("city").value = "";
}

// Step 2. f) Verify the conditions of state
if (stateLength < 2){ 
  // the input field cannot be empty nor less than 2 characters
  alert("The state must be 2 characters.")
} else {
    console.log("Success! The state, " + state + ", was accepted.");
    document.getElementById("state").value = "";
}

// Step 2. g) Verify the conditions of zipCode
if (zipCodeLength < 5){ 
  // the input field cannot be empty nor less than 2 characters
  alert("The zipCode must be 5 numbers.")
} else {
    console.log("Success! The zipCode, " + zipCode + ", was accepted.");
    document.getElementById("zipCode").value = "";
}

// Step 2. h) Verify the conditions of age
  if (age.length < 2){
    alert("The age must be 2 numbers.");
  } else {
    console.log("Success! The age, " + age + ",  was accepted.");
  }
  document.getElementById("zipCode").value = "";  
  console.log("---------------------------------------------------");

} 
