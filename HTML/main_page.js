
function verifyInput(){
    var firstName = document.getElementBy("firstName").value;
    var lastName = document.getElementBy("lastName").value;
    var age = document.getElementBy("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var alertMsg = "";
    if(((checkName(firstName) == true) || firstName == '')) {
		alertMsg = alertMsg + "Please enter a right first name.";
	}
	if(((checkName(lastName) == true) || lastName == '')) {
		alertMsg = alertMsg + "Please enter a right last name.";
	}
    if(alertMsg != ''){
        window.alert(alertMsg);
}
	

function checkName(str){
        return /\d/.test(str); 
    }


}
