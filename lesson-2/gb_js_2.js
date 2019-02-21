//Задание 3
var a = 2;
var b = -5;
var result = 0;
function calc(a, b) {
    if (a >= 0 && b >= 0) {
        if (a > b) {
            result = a - b;
        }
        else if (a < b) {
            result = b - a;
        } else {
            result = 0;
        }
    } else if(a < 0 && b < 0){
        result = a * b;
        if((a < 0 && b > 0) ||(a > 0 && b < 0)){
            result = a + b;
        }
    }
    alert (result);
};
calc(a,b);

// swith
//Задание  4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
switch (Math.floor(Math.random()*15)){
            case 0:
                console.log(0);
            case 1:
                console.log(1);
            case 2:
                console.log(2);
            case 3:
                console.log(3);
            case 4:
                console.log(4);
            case 5:
                console.log(5);
            case 6:
                console.log(6);
            case 7:
                console.log(7);
            case 8:
                console.log(8);
            case 9:
                console.log(9);
            case 10:
                console.log(10);
            case 11:
                console.log(11);
            case 12:
                console.log(12);
            case 13:
                console.log(13);
            case 14:
                console.log(14);
            case 15:
                console.log(15);
        };

// Альтернативный вариант через do/while
function doWhile(a){
    do{
        console.log(a);
        a++;
    }
    while(a <= 15){
    }
}
doWhile(Math.floor(Math.random()*15));

//еще вариант через рекурсию
function recursion(a){
    if(a <= 15){
        console.log(a);
        recursion(a+1);
    }
}
recursion(Math.floor(Math.random()*15));

//Задание 5  Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return
var result= 0;
var b = 10;
var c = 5;
function calculatePlus(b,c){
    result = b + c;
    return result;
}
calculatePlus(b,c);
function calculateMinus(b, c){
    result = b - c;
    return result;
}
calculateMinus(b,c);
function calculateMultiplication(b, c){
    result = b * c;
    return result;
}
calculateMultiplication(b,c);
function calculateDivision(b,c){
    result = b / c;
    return result;
}
calculateDivision(b,c);
//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения
// операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение
// (использовать switch).
function realCalc(b, c, operator){
    var result = 0;
    switch (operator){
        case '+': result = calculatePlus(b,c);
        break;
        case '-': result = calculateMinus(b,c);
            break;
        case '*': result = calculateMultiplication(b,c);
            break;
        case '/': result = calculateDivision(b,c);
            break;
    }
    return result
}
realCalc(3, 5, '*');
// ### 7. *Сравнить null и 0. Попробуйте объяснить результат
// алгоритмы проверки равенства == и сравнения >= > < <= работают по-разному.
// Сравнение честно приводит к числу, получается ноль. А при проверке равенства
// значения null и undefined обрабатываются особым образом: они равны друг другу, но не равны чему-то ещё.

// alert( null > 0 ); // false
// alert( null == 0 ); // false
// alert(null >= 0); // true

// 8. *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow){
    if (pow!== 1) {
        return val * power(val, pow - 1);
    } else {
        return val;
    }

}
power(5, 2);















