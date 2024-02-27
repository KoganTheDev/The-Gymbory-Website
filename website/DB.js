// Data Access Tier - logic related to the data access tier


function processInfo(email,password, firstName, lastName, age, gen, height, weight) {
	var dbString = stringify(email,password, firstName, lastName, age, gen, height, weight);
	localStorage.setItem(email, dbString);
}

function stringify(email,password, firstName, lastName, age, gen, height, weight) {
    var emailStr = 'email: ' + email;
    var passwordStr = 'password: ' + password; 
	var fnameStr = 'fname: ' + firstName;
	var lnameStr = 'lname: ' + lastName;
	var ageStr = 'age: ' + age;
	var heightStr = 'height: ' + height;
	var weightStr = 'weight: ' + weight;
	var genderStr = 'gender: ' + gen;
	var dbStr = '{' + emailStr + ',' + passwordStr + ',' + fnameStr + ',' + lnameStr + ',' + ageStr + ',' + heightStr + ',' + weightStr + ',' + genderStr + '}';
	return dbStr;	
}


function CheckUsersInfoDB(usrn,pass){	//rows: number of users. cols: number of info params
	for (i = 0; i < localStorage.length; i++) {
		var userId = localStorage.key(i);
		if (userId.localeCompare(usrn) === 0){
			var userInfo=localStorage.getItem(userId);
			var p=getPassword(userInfo);
			if (p.localeCompare(pass) === 0){
				return true;
			}
		}
	}
	return false;
}

function getPassword(userInfo){
	var PassIndex = userInfo.indexOf('password')+10;
	var endPassIndex = userInfo.indexOf('fname')-1;
	return 	userInfo.substring(PassIndex, endPassIndex);
}
