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
                                                {
													name1: 'Ольга Коваленко',
													name2: 'Марія Іванова',
													name3: 'Ірина Сидоренко',
                                                },
                                            ]
                                        },
                                        {
                                            name: 'Імперія Меблів',
											"business segment":'Продаж меблів',
											sellers: [
                                                { 
													name1: 'Наталія Петренко',
													name2: 'Тетяна Шевченко',
                                                },
                                            ]
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