
function verifyInput(){
    var name = document.getElementBy("firstName").value;
    var lastName = document.getElementBy("lastName").value;
    var age = document.getElementBy("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var alertMsg = "";
    if(name != 5){
        alertMsg = alertMsg+"type 5";
    }
    if(alertMsg != ""){
        alert(alertMsg);
    }
    }
/* 
    if(((checkName(firstName) == true) || firstName == '')) {
		alertMsg = alertMsg + "Please enter a right first name.";
        
	}
	if(((checkName(lastName) == true) || lastName == '')) {
		alertMsg = alertMsg + "Please enter a right last name.";
        
   */
    
//check if there is a digit in a given string
//function checkName(str){
    //return /\d/.test(str); 
//}


