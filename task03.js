/*
Перевірка теорії ймовірності. 
Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
Порахувати кількість парних та непарних серед них. 
Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
Приклад функції checkProbabilityTheory(count). 
Парметр count буде вказувати скільки разів буде генеруватися випадкове число.
*/


for(let i = 0; i < 10; i++)
    checkProbabilityTheory(1000);

function checkProbabilityTheory(count){
    let even = 0;
    let odd = 0;
    for(let i = 0; i < count; i++){
        let r = Math.round(Math.random() * 900) + 100;
        if(r % 2 == 0)
            even++;
        else 
            odd++;
    }
    console.log(Math.round(even/count*100) + "% / " + Math.round(odd/count*100) + "%");
}
