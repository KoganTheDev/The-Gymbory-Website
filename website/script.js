// Business Logic Tier - logic related to the presentation tier

function phoneMenu() {
  var x = document.querySelector(".navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


/*===============================BMI claculator===========================*/
function calculateBMI() {
  var height = parseFloat(document.getElementById('height').value);
  var weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(height) || isNaN(weight) || height <= 65 || height >=230  || weight <= 0 || weight>=500 ) {
      document.getElementById('result').innerHTML = "Please enter valid height and weight.";
      return;
  }

  var bmi = weight / ((height / 100) * (height / 100));
  var bmiResult = "Your BMI is " + bmi.toFixed(2) + ". ";

  if (bmi < 18.5) {
      bmiResult += "You are underweight.";
  } else if (bmi >= 18.5 && bmi < 25) {
      bmiResult += "You have a normal weight.";
  } else if (bmi >= 25 && bmi < 30) {
      bmiResult += "You are overweight.";
  } else {
      bmiResult += "You are obese.";
  }
  document.getElementById('result').innerHTML = bmiResult;
}



/*===============================verify input in sign up===========================*/
function verifyInput(){
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var age = document.getElementById("age").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var email = document.getElementById("Email").value;
  var password = document.getElementById("password").value;
  var gen = document.getElementById("gender").value;

  
  if (!isValidName(firstName)) {
    alert("Invalid First name. Please try again");
  }

  if (!isValidName(lastName)) {
    alert("Invalid Last name. Please try again");
  }

  // Fix the age validation condition
  if (isNaN(age) || age < 1 || age > 100) {
    alert("Age must be between 1 and 100. Please try again");
  }

  if (isNaN(height) || height < 60 || height > 230) {
    alert("Height should be between 60 and 230.");
  }

  if (isNaN(weight) || weight > 500 || weight < 10) {
    alert("Weight should be between 10 and 500.");
  }

  if (!isValidEmail(email)) {
    alert("Invalid Email address. Please try again.");
  }
  else
  {
    processInfo(email,password, firstName, lastName, age, gen, height, weight);
    alert("submitted");
    location.reload();
  }
}


function isValidName(name) {
  return /^[a-zA-Z]+$/.test(name) && name.trim() !== "";
} // this function checks if name contains digits or symbols (not a-z)

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
} // this function checks if the email complies to the standard form of an email address.

function showPass() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

/*===============================check if a user is exist in the local storage===========================*/
function checkExistence(){
  var login_mail = document.getElementById("Email").value;
  var login_password = document.getElementById("myInput").value;
  var flag = CheckUsersInfoDB(login_mail,login_password);
  if (flag == true) {
    alert("You logged in successfully");
  }
  else{
    alert("Wrong user name, email or password! please try again.")
  }
  location.reload();
}

