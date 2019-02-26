// 1. Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах
// описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5,
// ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью
// console.log и вернуть пустой объект.

var number = {
    hundreds: 0,
    tens: 0,
    units: 0
};
var decomposition = function () {
    var enteredNumber = prompt('Введите число от 0 до 999');

    if (enteredNumber < 10) {
        number.units = enteredNumber;
        alert('Едениц в введенном числе: ' + number.units);
    } else if (enteredNumber <= 999) {
        number.units = Math.floor(enteredNumber % 10);
        number.tens = Math.floor(enteredNumber / 10 % 10);
        number.hundreds = Math.floor(enteredNumber / 100 % 10);
        alert('Состав введенного вами числа ' + enteredNumber + ' : ' + '\nСотен: ' + number.hundreds + ' Десятков: ' + number.tens + ' Едениц: ' + number.units);
    } else if (enteredNumber < 0 || enteredNumber > 999 || enteredNumber === undefined) {
        alert('Введено некорректное число');
        console.log('Введено некорректное число');
        decomposition();
    }
    console.log(number);
};
decomposition();

// 2. Перенести функционал подсчета корзины на объектно-ориентированную базу
var goodsBasketObj = {
    productOne: {
        name: 'майка',
        quantity: 1,
        price: 3000
    },
    productTwo: {
        name: 'футболка',
        quantity: 2,
        price: 2000
    },
    productThree: {
        name: 'платье',
        quantity: 2,
        price: 3700
    }
};


function countBasketPrice(goodsBasket) {
    var goodsSum = 0;
    Object.keys(goodsBasket).forEach(function (key) {
        goodsSum += goodsBasket[key].quantity * goodsBasket[key].price;
    });
    return goodsSum;
}

console.log(countBasketPrice(goodsBasketObj));