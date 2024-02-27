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

  if (isNaN(height) || isNaN(weight) || height <= 0 || height >=230  || weight <= 0 || weight>=500 ) {
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
processInfo(email,password, firstName, lastName, age, gen, height, weight);
alert("submitted");
location.reload();
}



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

/*function checkExistence(){
  var flag = false;
  var login_userName = document.getElementById("userName").value;
  var login_email = document.getElementById("Email").value;
  var login_password = document.getElementById("myInput").value;
  var usersTable = CheckUsersInfoDB();
  for (i=0; i<usersTable.length; i++) {
    var user = usersTable[i];
    if (usersTable[i][0] === login_userName && usersTable[i][1] === login_email && usersTable[i][2] === login_password) {
      flag = true;
    } 
  }
  if (flag == true) {
    alert("You logged in successfully");
  }
  else{
    alert("Wrong user name, email or password! please try again.")
  }
  location.reload();
}*/