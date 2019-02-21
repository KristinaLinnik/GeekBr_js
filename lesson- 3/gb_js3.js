// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
var primes = function (number) {
    var i = 1;
    var primesArr = [];
    nextNumber: while (i < number) {
        i++;
        for (var j = 2; j < i; j++) {
            if (i % j === 0)
                continue nextNumber;
        }
        primesArr.push(j);
    }
    return primesArr;
};
alert(primes(100));


// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.


var goodsBasket = [['майка', 2, 1500], ['футболка', 3, 1500], ['платье', 1, 2500]];
var goodsSum = 0;

function countBasketPrice(goodsBasket) {

    for (var i = 0; i < goodsBasket.length; i++) {
        goodsSum += goodsBasket[i][1] * goodsBasket[i][2];

    }
    return goodsSum;

}

countBasketPrice(goodsBasket);

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

for (var i = 0; i <= 9; ++i)
    alert(i);

// *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
// только у вашей пирамиды должно быть 20 рядов, а не 5:


var str = '';
while (str.length <= 20) {
    str += '*';
    console.log(str);
}
