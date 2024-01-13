/*
Уявімо собі, що ми є власниками великої компанії, яка розробляє платформу для продажу квитків
Окрім того, наша компанія продає рішення для організації продажу цих квитків
Таким чином, у нас будуть клієнти, які придбають наше програмне забезпечення (ПО)
По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), які вже використовують наше ПО для продажу квитків
Крім цього, ці "дочірні компанії" також можуть стати постачальниками цього рішення, і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), і так далі і далі

Ось приклад об'єкту, зверніть увагу на вкладеність, та маєте на увазі що об'єкт може ставати ще глибшим. 
*/

const company = {
    name:'Лісова Корона',
    "business segment":'Лісорубне підприємство',
    certifications: 'FSC',
    partners: [
        {
            name: 'Дерево Справа',
            "business segment":'Вирубка дерев',
            certification: 'OHSAS 18001',
            clients: [
                {
                    name: 'Готові Рішення',
                    "business segment":'Обробка деревини',
                    certification: 'DIN EN 13556',
                    clients: [
                        {
                            name: 'Зручне Дерево',
							"business segment":'Вироблення матеріалу для меблів',
							certification: 'ISO 9001:2015',
                            clients: [
                                {
                                    name: 'Еко-Стіл',
									"business segment":'Збірка меблів',
									certification: 'ISO 9001:2015'
                                }
                            ]
                        },
                        {
                            name: 'ЕкоДрево',
							"business segment":'Вироблення матеріалу для меблів',
							certification: 'ISO 9001:2015',
                            clients: [
                                {
                                    name: 'Меблева Фея',
                                    "business segment":'Збірка меблів',
                                    certification: 'ISO 9001:2015'
                                },
                                {
                                    name: 'ЕкоФорма',
									"business segment":'Збірка меблів',
									certification: 'ISO 9001:2015'
                                },
                                {
                                    name: 'ЕкоСтиль Меблі',
									"business segment":'Збірка меблів',
									certification: 'ISO 9001:2015'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Дубовий Світ',
					"business segment":'Обробка деревини',
					certifications: 'DIN EN 13556',
                    clients: [
                        {
                            name: 'Майстерня Дерева',
							"business segment":'Вироблення матеріалу для меблів',
							certifications: 'ISO 9001:2015'
                        },
                        {
                            name: 'Гірський Дуб',
							"business segment":'Вироблення матеріалу для меблів',
							certifications: 'ISO 9001:2015'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Лісова Краса',
			"business segment":'Вирубка дерев',
			certification: 'OHSAS 18001',
            clients: [
                {
                    name: 'Лісова Майстерня',
					"business segment":'Обробка деревини',
					certification: 'DIN EN 13556',
                    clients: [
                        {
                            name: 'Дерево Ідеал',
							"business segment":'Вироблення матеріалу для меблів',
							certification: 'ISO 9001:2015',
                            clients: [
                                {
                                    name: 'Меблевий Майстер',
									"business segment":'Збірка меблів',
									certification: 'ISO 9001:2015', 
                                    clients: [
                                        {
                                            name: 'МебліКомфорт',
											"business segment":'Продаж меблів',
											sellers: [
                                                'Ольга Коваленко',
                                                'Марія Іванова',
                                                'Ірина Сидоренко'
                                            ]
                                        },
                                        {
                                            name: 'Імперія Меблів',
											"business segment":'Продаж меблів',
											sellers: [
                                                'Наталія Петренко',
												'Тетяна Шевченко'
                                            ]
                                        },
                                        {
                                            name: 'Меблевий Експрес',
											"business segment":'Продаж меблів',
											sellers: [
                                                'Ольга Коваленко',
												'Марія Іванова',
												'Ірина Сидоренко'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

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
        if(!Array.isArray(value) || key == "sellers")
            console.log(key + ": " + value);

    }
}

let foundCompany = findValueByKey(company, "Імперія Меблів");
getInfo(foundCompany);