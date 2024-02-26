// Data Access Tier - logic related to the data access tier


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
	var dbStr = '{' + emailStr + ',' + passwordStr + ',' + nameStr + ',' + ageStr + ',' + heightStr + ',' + weightStr + '}';
	return dbStr;	
}

function CheckUsersInfoDB(){
	var users = [];	//rows: number of student. cols: number of info params
	for (i = 0; i < localStorage.length; i++) {
		var userName = localStorage.key(i);
		var userInfo = localStorage.getItem(userName);
		var tempuser = [];
		tempuser[0] = userName;
		tempUser[1] = getEmail(userInfo);
		tempUser[2] = getPassword(userInfo);
		users[i] = tempUser;
	}
	return users;
}


function getEmail(userInfo){
	var emailIndex = userInfo.indexOf('Email')+7;
	var endEmailIndex = userInfo.indexOf('Email')-1;
	return 	userInfo.substring(emailIndex, endEmailIndex);
}

function getPassword(userInfo){
	var PassIndex = userInfo.indexOf('password')+10;
	var endPassIndex = userInfo.indexOf('password')-1;
	return 	userInfo.substring(PassIndex, endPassIndex);
}