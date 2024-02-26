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
var users = [];	//rows: number of users. cols: number of info params
	for (i = 0; i < localStorage.length; i++) {
		var studentId = localStorage.key(i);
		var studentInfo = localStorage.getItem(studentId);
		var tmpStudent = [];
		tmpStudent[0] = studentId;
		tmpStudent[1] = getName(studentInfo);
		tmpStudent[2] = getLastName(studentInfo);
		tmpStudent[3] = getAddr(studentInfo);
		tmpStudent[4] = getLang(studentInfo);
		tmpStudent[5] = getKnowlage(studentInfo);
		students[i] = tmpStudent;
	}
	return students;

}
