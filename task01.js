/*
Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив. 
Зверніть увагу: не створювати новий масив, вже перемішаний, а саме перемішувати той, який їй передали.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function myBlend(arr){
    for(let i = 0; i < arr.length * 2; i++){
        let m = Math.round(Math.random() * (arr.length - 1));
        let n = Math.round(Math.random() * (arr.length - 1));
        [arr[m], arr[n]] = [arr[n], arr[m]];
    }
}

console.log(arr);
myBlend(arr);
console.log(arr);
