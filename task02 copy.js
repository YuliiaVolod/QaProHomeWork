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
			equipments: [  
				{	
					type: 'Лісосічка',
					brand: 'John Deere',
                },
            ],
			clients: [ 
                {	
					name: 'Готові Рішення',
					"business segment":'Обробка деревини',
					certification: 'DIN EN 13556',
					equipments: [
						{	
							type: 'Лісосічка',
							brand: 'Bosch',
                        },
                    ],
                    client: 
                        {
							name: 'Зручне Дерево',
							"business segment":'Вироблення матеріалу для меблів',
							certification: 'ISO 9001:2015',
							equipments: [
								{	
									type: 'Лісосічка',
									brand: 'John Deere',
                                },
                            ],
                            client:  
                                {	
                                    name: 'Меблева Фея',
                                    "business segment":'Збірка меблів',
                                    certification: 'ISO 9001:2015',
                                    equipments: [
                                        {
                                            type: 'Лісосічка',
                                            brand: 'John Deere',
                                        },
                                    ],
                                },
                            },
                        },
                        {                  		
							name: 'ЕкоДрево',
							"business segment":'Вироблення матеріалу для меблів',
							certification: 'ISO 9001:2015',
							equipments: [
                                {
									type: 'Лісосічка',
									brand: 'John Deere',
                                },
                            ],
						    clients: [
                                {
									name: 'Еко-Стіл',
									"business segment":'Збірка меблів',
									certification: 'ISO 9001:2015',
									equipments: [
										{	
											type: 'Лісосічка',
											brand: 'Bosch',
                                        },
                                    ],
                                },
                                {	
									name: 'ЕкоФорма',
									"business segment":'Збірка меблів',
									certification: 'ISO 9001:2015',
									equipments: [
                                        {
											type: 'Лісосічка',
											brand: 'John Deere',
                                        },
                                    ],
                                },
                                {									
									name: 'ЕкоСтиль Меблі',
									"business segment":'Збірка меблів',
									certification: 'ISO 9001:2015',
									equipments: [
                                        {
											type: 'Лісосічка',
											brand: 'Laguna Tools',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            clients: [
                {	
					name: 'Дубовий Світ',
					"business segment":'Обробка деревини',
					certifications: 'DIN EN 13556',
					equipment: [
                        {
							type: 'Лісосічка',
							brand: 'Laguna Tools',
                        },
                    ],
                   
                    clients: [
					    {
							name: 'Майстерня Дерева',
							"business segment":'Вироблення матеріалу для меблів',
							certifications: 'ISO 9001:2015',
							equipment: [
                                {
                                    type: 'Лісосічка',
                                    brand: 'John Deere',
                                },
                            ],
                        },
                        {
							name: 'Гірський Дуб',
							"business segment":'Вироблення матеріалу для меблів',
							certifications: 'ISO 9001:2015',
							equipment: [                                                                     
                                {
                                    type: 'Лісосічка',
                                    brand: 'Metabo',
                                },
                            ],
                        },
                    ],
                },
            ],
        }, 
    
		{			
			name:'Зелений Ліс',
			"business segment":'Вирубка дерев',
			certifications: 'OHSAS 18001',
			equipment: [
                {
					type: 'Лісосічка',
					brand: 'Metabo',
                },
            ],
        },
			clients:
                {
					name: 'Деревоцентр',
					"business segment":'Обробка деревини',
					certifications: 'DIN EN 13556',
					equipment: [
                            {
							type: 'Лісосічка',
							brand: 'John Deere',
                            },
                        ],
					clients: [
                        {
						
							name: 'Деревяні Історії',
							"business segment":'Вироблення матеріалу для меблів',
							certifications: 'ISO 9001:2015',
							equipment: [
                                {
									type: 'Лісосічка',
									brand: 'SCM Group',
                                },
                            ],
                        },
                        {
							name: 'ЛісоДизайн',
							"business segment":'Вироблення матеріалу для меблів',
							certifications: 'ISO 9001:2015',
							equipment: [
                                {
									type: 'Лісосічка',
									brand: 'John Deere',
                                },
                            ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
		{	
			name: 'Лісова Краса',
			"business segment":'Вирубка дерев',
			certifications: 'OHSAS 18001',
			equipment: {

					type: 'Лісосічка',
					brand: 'SCM Group',
            },

			clients: {
					name: 'Лісова Майстерня',
					"business segment":'Обробка деревини',
					certifications: 'DIN EN 13556',
					equipment: {

							type: 'Лісосічка',
							brand: 'John Deere',
                    },
					clients:{
							name: 'Дерево Ідеал',
							"business segment":'Вироблення матеріалу для меблів',
							certifications: 'ISO 9001:2015',
							equipment:{
									
									type: 'Лісосічка',
									brand: 'Virutex',
                            },

							clients: {
									name: 'Меблевий Майстер',
									"business segment":'Збірка меблів',
									certifications: 'ISO 9001:2015',
									equipment:{
											type: 'Лісосічка',
											brand: 'Virutex',
                                    },
                                },
   
									clients: [
                                        {
											name: 'МебліКомфорт',
											"business segment":'Продаж меблів',
											sellers: [
                                                {
													name1: 'Ольга Коваленко',
													name2: 'Марія Іванова',
													name3: 'Ірина Сидоренко',
                                                },
                                            ],
                                        },
                                        { 
											name: 'Імперія Меблів',
											"business segment":'Продаж меблів',
											sellers: [
                                                { 
													name1: 'Наталія Петренко',
													name2: 'Тетяна Шевченко',
                                                },
                                            ],
                                        },
                                        {
											name: 'Меблевий Експрес',
											"business segment":'Продаж меблів',
											sellers: [
                                                {
													name1: 'Ольга Коваленко',
													name2: 'Марія Іванова',
													name3: 'Ірина Сидоренко',
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },        
                                
                },                    
            ],
        },        
    ],
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