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
	var statStr= 'loggedin: 0'
	var dbStr = '{' + emailStr + ',' + passwordStr + ',' + fnameStr + ',' + lnameStr + ',' + ageStr + ',' + heightStr + ',' + weightStr + ',' + genderStr + ','+ statStr + '}';
	return dbStr;	
}

function stringify_Change(email,password, firstName, lastName, age, gen, height, weight) {
    var emailStr = 'email: ' + email;
    var passwordStr = 'password: ' + password; 
	var fnameStr = 'fname: ' + firstName;
	var lnameStr = 'lname: ' + lastName;
	var ageStr = 'age: ' + age;
	var heightStr = 'height: ' + height;
	var weightStr = 'weight: ' + weight;
	var genderStr = 'gender: ' + gen;
	var statStr= 'loggedin: 1';
	var dbStrc= '{' + emailStr + ',' + passwordStr + ',' + fnameStr + ',' + lnameStr + ',' + ageStr + ',' + heightStr + ',' + weightStr + ',' + genderStr + ','+ statStr + '}';
	return dbStrc;	
}

function CheckUsersInfoDB(usrn){
	var userData=[];
	for (i = 0; i < localStorage.length; i++) {
		var userId = localStorage.key(i);
		if (userId.localeCompare(usrn) === 0){
			var userInfo=localStorage.getItem(userId);
			userData[0]=userId;
			userData[1]=getPassword(userInfo);
			userData[2]=getFname(userInfo);
			userData[3]=getLname(userInfo);
			userData[4]=getAge(userInfo);
			userData[5]=getHeight(userInfo);
			userData[6]=getWeight(userInfo);
			userData[7]=getGender(userInfo);
			userData[8]=getStat(userInfo);
		}
	}
	return userData;
}


function ChangeStat(usrn){//to change string inside local storage.
	var userData=CheckUsersInfoDB(usrn);
	var new_info=stringify_Change(usrn,userData[1],userData[2],userData[3],userData[4],userData[5],userData[6],userData[7]);
	localStorage.setItem(usrn,new_info);
}

function checkStat(usrn){
	if (usrn != null){
	  var userInfo=localStorage.getItem(usrn);
	  var stat=getStat(userInfo);
	  if (stat==true){
		return true;
	  }
	}
	return false;
  }


function getPassword(userInfo){
	var PassIndex = userInfo.indexOf('password')+10;
	var endPassIndex = userInfo.indexOf('fname')-1;
	return 	userInfo.substring(PassIndex, endPassIndex);
}

function getFname(userInfo){
	var PassIndex = userInfo.indexOf('fname')+7;
	var endPassIndex = userInfo.indexOf('lname')-1;
	return 	userInfo.substring(PassIndex, endPassIndex);
}

function getLname(userInfo){
	var PassIndex = userInfo.indexOf('lname')+7;
	var endPassIndex = userInfo.indexOf('age')-1;
	return 	userInfo.substring(PassIndex, endPassIndex);
}

function getAge(userInfo){
	var PassIndex = userInfo.indexOf('age')+5;
	var endPassIndex = userInfo.indexOf('height')-1;
	return 	userInfo.substring(PassIndex, endPassIndex);
}

function getHeight(userInfo){
	var PassIndex = userInfo.indexOf('height')+8;
	var endPassIndex = userInfo.indexOf('weight')-1;
	return 	userInfo.substring(PassIndex, endPassIndex);
}

function getWeight(userInfo){
	var PassIndex = userInfo.indexOf('weight')+8;
	var endPassIndex = userInfo.indexOf('gender')-1;
	return 	userInfo.substring(PassIndex, endPassIndex);
}

function getGender(userInfo){
	var PassIndex = userInfo.indexOf('gender')+8;
	var endPassIndex = userInfo.indexOf('loggedin')-1;
	return 	userInfo.substring(PassIndex, endPassIndex);
}
function getStat(userInfo){
	var PassIndex = userInfo.indexOf('loggedin')+10;
	var endPassIndex = userInfo.indexOf('}')-1;
	return 	userInfo.substring(PassIndex, endPassIndex);
}
