var year = 2000;
var month = 1;

var calendar = document.querySelector('#calendar');
var dates = document.querySelector('.dates');

//Функция построения календаря
build(year, month, dates);

function build(year, month, dates) {
	var arr = [];
	var from = 1;
	var to = getLastDay(year, month);
	console.log(to);

	//var preNum = getPreNum();
	//var postNum = getPreNum();


	//arr = createArr(from, to);
	//arr = shiftElems(preNum, arr);
	//arr = popElems(postNum, arr);
	//arr = matrix(7, arr);
	
	//createTable(arr, dates);
}

function createTable(arr, parent) {

}

function createArr(from, to) {

}

function shiftElems(num, arr) {

}

function popElems(num, arr) {

}
function getLastDay(year, month) {
	if (month == 1) {
		if (isLeap(year)) {
			return 29;
		} else {
			return 28;
		}
	} 
	else {
		var days = [31, 'undefined', 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		return days[month];
	}
}
function isLeap(year) {
	if ((year % 4 == 0 &&  year % 100 != 0) || year % 400 == 0) { 
		return true;
	} else {
		return false;
	}
}
function getPreNum() {

}
function getPostNum() {

}
function matrix() {

}
