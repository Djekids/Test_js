"use strict"; // строгий режим
let textTest = ('Результат вычислений');
const prov = textTest;
let b = 2;
let x = 10;
let y =20;
let a = (x+y)/b;
//alert (prov + ' = '+ a);
//console.log (prov + ' = '+ a + (' (из скрипта в консоль)'));
/*
Это
многосточный
комментарий
Далее объявляю новые переменные в упрощенном виде
*/
let z=10, c=20, v=30, n=40;
let m = (z+c+v+n);
//alert ('Результат сложения переменных в упрощенном виде = ' + (z+c+v+n));
let s, d, f, g, h;
s = 10;
d = 20;
f = 30;
v = 20;
h = 20;
//alert (s+d+f+v+h);

// Операторы присваивания
let age = 18+5;
age += 5;
age -= 10;
age *= 2;
//age /= 3;
age ++; //увеличение на еденицу
age --; // уменьшение на еденицу
console.log(age + ` 10
переход на новую строку`);

// Операторы сравнения
const vasya = 20;

console.log(age < vasya); // age меньше вася
console.log(age <= vasya); // age меньше или равно вася
console.log(age == vasya); // age равно вася
console.log(age > vasya); // age больше вася
console.log(age >= vasya); // age больше или равно вася

// Строковые литералы
const name1 = 'иванов';
const famely = 'иван';
const result = `это результат слияния констант
${name1}
${famely}
вроде должно получиться
ок`
console.log (result);

// конвертация строки в число
const ageString = `18`;
const ageString_1 = 40;
const Boolean_1 = -5;
console.log (Number(ageString) + 5);
console.log (String(ageString_1) + 20);
console.log (Boolean(Boolean_1) +20);
console.log (typeof (name1))

