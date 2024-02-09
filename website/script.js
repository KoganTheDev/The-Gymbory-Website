function phoneMenu() {
    var x = document.querySelector(".navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }



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
