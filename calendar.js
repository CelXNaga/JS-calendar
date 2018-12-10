//var calendar = document.querySelector('#calendar');
initCalendar(2018, 11, document.querySelector('#calendar')); 


//Функция инициализации календаря
function initCalendar(year, month, calendar) {
	var dates = calendar.querySelector('.dates');
	var info = calendar.querySelector('.info');

	build(year, month, dates);
	showInfo(year, month, info);
}
//Главная функция, которая создает календарь
function build(year, month, dates) {
	var arr = [];
	var firstDateOfMonth = 1;  //определяем с какого числа начинается месяц. Это константа.
	var lastDateOfMonth = getLastDay(year, month); //определяем какой датой заканчивается месяц.
	//определяем с какого дня недели начинается месяц. 
	//буквально мы определяем сколько "пустых" дней в неделе будет перед первым числом
	var preNum = getPreNum(year, month);
	//определяем сколько "пустых" дней будет в конце месяца
	var postNum = getPostNum(year, month);

	//создание масива чисел в месяце
	arr = createArr(firstDateOfMonth, lastDateOfMonth);
	
	//добавляет в начало массива "пустые" дни недели, чтобы в итоге получилось 7*5 ячеек
	arr = addEmptyElems(preNum, '', arr);
	//добавляем в конец массива "пустые" дни недели, чтобы в итоге получилось 7*5 ячеек
	arr = addToEndEmptyElems(postNum, '', arr);
	//разбивает массив на 7 элементов, создавая двухмерный массив
	arr = matrix(7, arr);
	createTable(arr, dates);
}

//функция, которая отображает блок инфо
function showInfo(year, month, elem) {
	elem.innerHTML = getMonthName(month) + ' ' +year;
}

//функция принимает номер месяца, а возвращает его название
function getMonthName(num) {
	var monthes = ['Январь',
				   'Февраль',
				   'Март',
				   'Апрель',
				   'Май',
				   'Июнь',
				   'Июль',
				   'Август',
				   'Сентябрь',
				   'Октябрь',
				   'Ноябрь',
				   'Декабрь'];
	return monthes[num];
}

//сюда передается уже двумерный массив, поэтому цикл будет двойной
//i2 - массив, элементы которого массивы
//i - под массив, элементы которого числа
function createTable(arr, parent) {
	for (var i2 = 0; i2 < arr.length; i2++) {
		var tr = document.createElement('tr');
		for (var i = 0; i < arr[i2].length; i++) {
			var td = document.createElement('td');
			td.innerHTML = arr[i2][i];
			tr.appendChild(td);
		}
		parent.appendChild(tr); 
	}
}

//создание масива чисел в месяце
function createArr(from, to) {
	var arr = [];
	for (var i = from; i <= to; i++) {
		arr.push(i);
	}
	return arr;
}
//добавляет в начало массива "пустые" дни недели, чтобы в итоге получилось 7*5 ячеек
function addEmptyElems(num, elem, arr) {
	for (var i = 0; i < num; i++) {
		arr.unshift(elem);
	}
	return arr;
}
//добавляем в конец массива "пустые" дни недели, чтобы в итоге получилось 7*5 ячеек
function addToEndEmptyElems(num, elem, arr) {
	for (var i = 0; i < num; i++) {
		arr.push(elem);
	}
	return arr;
}
//Эта функция определяет количество дней в конкретном месяце
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
//Эта функция определяет является ли этот конкретный год високосным
function isLeap(year) {
	if ((year % 4 == 0 &&  year % 100 != 0) || year % 400 == 0) { 
		return true;
	} else {
		return false;
	}
}
//определяем с какого дня недели начинается месяц. 
//буквально мы определяем сколько "пустых" дней в неделе будет перед первым числом
function getPreNum(year, month) {
	var JSFirstDay = getFirstWeekDayOfMonthNum(year, month);
	var RealFirstDay = getRealDayOfWeekNum(JSFirstDay);
	return RealFirstDay - 1;
}
//определяем сколько "пустых" дней будет в конце месяца
function getPostNum(year, month) {
	var JSFirstDay = getLastWeekDayOfMonthNum(year, month);
	var RealFirstDay = getRealDayOfWeekNum(JSFirstDay);
	return 7 - RealFirstDay;
}
//разбивает массив на 7 элементов, создавая 2х мерный массив
function matrix(num, arr) {
	var result = [];
	var chunk = [];
	var iterCount = arr.length / num;
	for (var i = 0; i < iterCount; i++) {
		chunk = arr.splice(0, num);
		result.push(chunk);
	}
	return result;
}

function getRealDayOfWeekNum(num) {
	if (num == 0) {
		return 7;
	} else {
		return num;
	}
}
function getFirstWeekDayOfMonthNum(year, month) {
	var date = new Date(year, month, 1);
	return date.getDay();
}
function getLastWeekDayOfMonthNum(year, month) {
	var date = new Date(year, month + 1, 0);
	return date.getDay();
}
