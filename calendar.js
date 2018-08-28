var year = 2015;
var month = 0;

var calendar = document.querySelector('#calendar');
var dates = calendar.querySelector('.dates');

//Функция построения календаря
build(year, month, dates);

function build(year, month, dates) {
	var arr = [];
	var from = 1;
	var to = getLastDay(year, month);
	var preNum = getPreNum();
	var postNum = getPreNum();


	arr = createArr(from, to);
	arr = shiftElems(preNum, arr);
	arr = popElems(postNum, arr);
	arr = matrix(7, arr);
	
	createTable(arr, dates);
}

function createTable(arr, parent) {

}

function createArr(from, to) {

}

function shiftElems(num, arr) {

}

function popElems(num, arr) {

}
function getLastDay(yer, month) {

}
function getPreNum() {

}
function getPostNum() {

}
function matrix() {

}
