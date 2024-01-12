/*
Уявімо собі, що ми є власниками великої компанії, яка розробляє платформу для продажу квитків
Окрім того, наша компанія продає рішення для організації продажу цих квитків
Таким чином, у нас будуть клієнти, які придбають наше програмне забезпечення (ПО)
По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), які вже використовують наше ПО для продажу квитків
Крім цього, ці "дочірні компанії" також можуть стати постачальниками цього рішення, і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), і так далі і далі

Ось приклад об'єкту, зверніть увагу на вкладеність, та маєте на увазі що об'єкт може ставати ще глибшим. 
*/

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(company, companyName){
    for(let key in company){
        const value = company[key];

        if(key == "name" && value == companyName)
            return company;
        
        else if(Array.isArray(value)){
            for(let i = 0; i < value.length; i++){
                const result = findValueByKey(value[i], companyName);
                if (result !== null) 
                    return result;
            }
        }
    }
    return null;
}

function getInfo(obj){
    for(let key in obj){
        const value = obj[key];
        if(!Array.isArray(value))
            console.log(key + ": " + value);
    }
}

let foundCompany = findValueByKey(company, "Клієнт 1.2.3");
getInfo(foundCompany);