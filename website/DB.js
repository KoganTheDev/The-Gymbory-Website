//data base


function processInfo(email,password, userName, age, height, weight) {
	var dbString = stringify(email, password,userName, age, height, weight);
	localStorage.setItem(userName, dbString);
}

function stringify(email,password, userName, age, height, weight) {
    var emailStr = 'email: ' + email;
    var passwordStr = 'password: ' + password; 
	var nameStr = 'name: ' + userName;
	var ageStr = 'age: ' + age;
	var heightStr = 'height: ' + height;
	var weightStr = 'weight: ' + weight;
	var dbStr = '{' + emailStr + ',' + passwordStr + ',' + nameStr + ',' + lastNameStr + ',' + ageStr + ',' + heightStr + ',' + weightStr + '}';
	return dbStr;	
}


