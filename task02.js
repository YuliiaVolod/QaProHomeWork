/*
У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @
- одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.
*/

const arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    }
];

var res = arr.filter(checker);

console.log(res);

function checker(item){
    const re = /[a-z0-9.]+@(gmail|yahoo).com/gi;
    return re.test(item.email);
}