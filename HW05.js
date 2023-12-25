const unit = "год";
const value = 1.5;

switch(unit) {
    case "кг":
        console.log(value + "кг це " + value * 1000 + "гр");
        break;
    case "км":
        console.log(value + "км це " + value * 1000 + "м");      
        break;
    case "год":
        console.log(value + "год це " + value * 60 + "хв");    
        break;
    default:
        console.log("Некоректна одиниця!");
}