
function verifyInput(){
    var firstName = document.getElementBy("firstName").value;
    var lastName = document.getElementBy("lastName").value;
    var age = document.getElementBy("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var alertMsg = "";
    const Mysubmit = document.getElementById("InfoButton");
    const submitErrorMsg = document.getElementById("submitErrorMsg");
    
//check if there is a digit in a given string
function checkName(str){
        return /\d/.test(str); 
    }



   
	
Mysubmit.onclick = function(firstName,lastName){
    if(((checkName(firstName) == true) || firstName == '')) {
		//alertMsg = alertMsg + "Please enter a right first name.";
        submitErrorMsg.textContent = "Please enter a right first name.";
	}
	if(((checkName(lastName) == true) || lastName == '')) {
		//alertMsg = alertMsg + "Please enter a right last name.";
        submitErrorMsg.textContent = "Please enter a right last name."
    }
    if(alertMsg != ''){
        alert(alertMsg);
}
}

}
