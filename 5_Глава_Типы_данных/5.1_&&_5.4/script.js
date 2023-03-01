// !(5.1)Методы примитивов===================================================
// ?Взгляните на следующий код:
let str = "Привет";

str.test = 5;

alert(str.test);
//Строгом режиме выдаёт ошибку и иначе undefined

// !(5.2)Числа====================================================================
// ?Создайте скрипт, который запрашивает ввод двух чисел(используйте prompt) и после показывает их сумму.

let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

console.log(a + b);

// ?Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

// console.log(1.35.toFixed(1));
// console.log(6.35.toFixed(1));

// *Но почему в примере ниже 6.35 округляется до 6.3?
// *Как правильно округлить 6.35?

console.log(Math.round(6.35 * 10) / 10);

// ?Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// ?Функция должна возвращать числовое значение.
// ?Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));

  if (num === null || num === '') return null;

  return +num;
}

console.log(`Число: ${readNumber()}`);

// ?Этот цикл – бесконечный. Он никогда не завершится, почему?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
// *i никогда не станет равным 10.

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log(i);
}

// ?Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// ?Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max(но не включая max).
// ?Пример работы функции:

// console.log(random(1, 5));
// console.log(random(1, 5));
// console.log(random(1, 5));

// *
function random(min, max) {
  return min + Math.random() * (max - min);
}
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

// ?Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// ?Любое число из интервала min..max должно появляться с одинаковой вероятностью.
// ?Пример работы функции:

// console.log(randomInteger(1, 5));
// console.log(randomInteger(1, 5));
// console.log(randomInteger(1, 5));

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randomInteger(1, 3));

// !(5.3)Строки=================================================================================================

// ?Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

//ucFirst("вася") == "Вася";

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася"));

// ?Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// ?Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

// ?Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//?Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

// ?Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// ?Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

 //console.log( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str) {
  return +str.slice(1);
}

// !(5.4)Массивы===============================================================================================================

// ?Что выведет следующий код?

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// let shoppingCart = fruits;
// shoppingCart.push("Банан");


// console.log(fruits.length);

console.log(fruits.length);//*4

// ?Давайте произведём 5 операций с массивом.
// ?Создайте массив styles с элементами «Джаз» и «Блюз».
// ?Добавьте «Рок - н - ролл» в конец.
// ?Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// ?Удалите первый элемент массива и покажите его.
// ?Вставьте Рэп и Регги в начало массива.
// ?Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок - н - ролл
// Джаз, Классика, Рок - н - ролл
// Классика, Рок - н - ролл
// Рэп, Регги, Классика, Рок - н - ролл

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");


// ?Каков результат? Почему?

// let arr = ["a", "b"];

// arr.push(function () {
//   console.log(this);
// });

// arr[2]();
// *a,b,function(){...}

// ?Напишите функцию sumInput(), которая:

// ?Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// ?Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// ?Подсчитывает и возвращает сумму элементов массива.
 //? P.S.Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("Введите число", 0);

    // Прекращаем ввод?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput());

// ?На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// ?Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// ?Функция getMaxSubSum(arr) должна возвращать эту сумму.

// getMaxSubSum([-1, 2, 3, -9]) == 5(сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6(берём все)
// ?Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
// ?Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
// getMaxSubSum([-1, -2, -3]) = 0


function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { 
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0; 
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); 
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));