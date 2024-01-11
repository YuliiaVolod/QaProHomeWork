/*
створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price
*/

const services = {
	стрижка: 60,
	гоління: 80,
	"Миття голови": 100
};

services.price = function(){
    let sum = 0; 
    for(let key in this){
        if(key !== "price" && key !== "minPrice" && key !== "maxPrice")
            sum += this[key];
    }
    return sum;
}

services.minPrice = function(){
    let min = Number.MAX_VALUE; 
    for(let key in this){
        if(key !== "price" && key !== "minPrice" && key !== "maxPrice"){
            if(min > this[key]){
                min = this[key];
            }
        }
    }
    return min;
}

services.maxPrice = function(){
    let max = Number.MIN_VALUE; 
    for(let key in this){
        if(key !== "price" && key !== "minPrice" && key !== "maxPrice"){
            if(max < this[key]){
                max = this[key];
            }
        }
    }
    return max;
}

services["Розбити скло"] = 200;

console.log("Сума: " + services.price() + "грн");
console.log("Мінімальна ціна: " + services.minPrice() + "грн");
console.log("Максимальна ціна: " + services.maxPrice() + "грн");

