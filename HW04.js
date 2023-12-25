function checkAge() {
    var number = document.getElementById("numberInput").value;

    let year = parseInt(number);
    let res = "";

    if (!isNaN(year) && year >= 0 && Number.isInteger(year)) {

        let x2 = year % 100;
        if (x2 >= 10 && x2 <= 19) {
            s = " років";
        } else {
            let x1 = year % 10;
            switch (x1) {
                case 1:
                    s = " рік";
                    break;
                case 2:
                case 3:
                case 4:
                    s = " роки";
                    break;
                default:
                    s = " років";
            }
        }

        res = year + s;

    } else {
        res = "Це не є додатнє ціле число або введене значення не є числом.";
    }

    document.getElementById("result").innerText = res;

}


/*
0 - років
1 - рік
2 - роки
3 - роки
4 - роки
5 - років
6 - років
7 - років
8 - років
9 - років
10-19 - років
20 - років
21 - рік
22 - роки
23 - роки
24 - роки
25 - років
26 - років
27 - років
28 - років
29 - років
(останні дві цифри)***10-19 - років
(остання одна цифра)***1 - рік, 2/3/4 - роки, 0/5/6/7/8/9 - років
*/