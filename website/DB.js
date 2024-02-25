//data base


function processInfo(email,password, name, lastName, age, height, weight) {
	var dbString = stringify(email, password,name, lastName, age, height, weight);
	localStorage.setItem(email, password, dbString);
}

function stringify(email,password, name, lastName, age, height, weight) {
    var emailStr = 'email: ' + email;
    var passwordStr = 'password: ' + password; 
	var nameStr = 'name: ' + name;
	var lastNameStr = 'lastName: ' + lastName;
	var ageStr = 'age: ' + age;
	var heightStr = 'height: ' + height;
	var weightStr = 'weight: ' + weight;
	var dbStr = '{' + emailStr + ',' + passwordStr + ',' + nameStr + ',' + lastNameStr + ',' + ageStr + ',' + heightStr + ',' + weightStr + '}';
	return dbStr;	
}

