// 1

let str = 'js';
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

// 2

function searchStart(array, searchString) {
    searchString = searchString.toLowerCase();
    let resultArray = array.filter(item => item.toLowerCase().startsWith(searchString));
    return resultArray;
}

let array1 = ['Кошка', 'Кит', 'Комар', 'Носорог'];
let searchString1 = 'ко';
console.log(searchStart(array1, searchString1));

let array2 = ['яблоко', 'груша', 'гриб', 'огурец'];
let searchString2 = 'гру';
console.log(searchStart(array2, searchString2));

let array3 = ['Дом', 'Банк', 'Больница', 'Театр'];
let searchString3 = 'Кино';
console.log(searchStart(array3, searchString3));

// 3

let number = 32.58884;
let roundedDown = Math.floor(number);
console.log(roundedDown);
let roundedUp = Math.ceil(number);
console.log(roundedUp);
let roundedNearest = Math.round(number);
console.log(roundedNearest);

// 4

let numbers = [52, 53, 49, 77, 21, 32];
let minNumber = Math.min(...numbers);
let maxNumber = Math.max(...numbers);

console.log(`Наименьшее число: ${minNumber}`);
console.log(`Наибольшее число: ${maxNumber}`);

// 5

function random1and10() {
    let randomNumber = Math.round(Math.random() * 10);
    console.log(randomNumber);
}

random1and10();

// 6

function getRandomArrNumbers(maxValue) {
    let length = Math.floor(maxValue / 2);
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.round(Math.random() * maxValue);
        randomArray.push(randomNumber);
    }
    return randomArray;
}

let resultArray1 = getRandomArrNumbers(7);
console.log(resultArray1);

let resultArray2 = getRandomArrNumbers(12);
console.log(resultArray2);

// 7

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

let minRange = 10;
let maxRange = 20;
let randomValue = getRandomInt(minRange, maxRange);
console.log(randomValue);

// 8

let currentDate = new Date();
console.log(currentDate);

// 9

let currentDate1 = new Date();
let futureDate = new Date(currentDate1);
futureDate.setDate(futureDate.getDate() + 73);
console.log(futureDate);

// 10

function formatDateTime(inputDate) {
    let months = [ 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let day = inputDate.getDate();
    let month = months[inputDate.getMonth()];
    let year = inputDate.getFullYear();
    let dayOfWeek = daysOfWeek[inputDate.getDay()];
    let hours = inputDate.getHours();
    let minutes = inputDate.getMinutes();
    let seconds = inputDate.getSeconds();
    let formattedDate = `Дата: ${day} ${month} ${year} - это ${dayOfWeek}.`;
    let formattedTime = `Время: ${hours}:${minutes}:${seconds}`;
    return `${formattedDate}\n${formattedTime}`;
}
let currentDate2 = new Date();
let formattedDateTime = formatDateTime(currentDate2);
console.log(formattedDateTime);
