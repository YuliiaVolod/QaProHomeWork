/*
Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містяти літери А (великої або малої)
*/

const str = "qwErtytgGbafggAfffviuiuttvrffakljhikjghi";
const re = /[^a]{6}/gi;
console.log(str.match(re));
