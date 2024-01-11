/*Створіть об'єкт з щонайменше трьома властивостями. Напишіть метод getInfo(), 
який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта. 

Не використовувати методи keys, values, entries

obj.getInfo(); // Правильна інформація про об'єкт
obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.*/


const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Blue',
    mileage: 15000,
    isElectric: false
  };

car.getInfo = function(){
    for(let key in this){
        if(key !== "getInfo")
            console.log(key + ": " + this[key]);
    }
}

car.getInfo();

console.log();
car.engineType = 'Gasoline';
car.transmission = 'Automatic';
car.getInfo();