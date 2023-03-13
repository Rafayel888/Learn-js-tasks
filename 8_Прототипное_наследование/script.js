// !Прототипное наследование===================================

// ?В приведённом ниже коде создаются и изменяются два объекта.

// ?Какие значения показываются в процессе выполнения кода?

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// alert( rabbit.jumps ); // ? (1)

// delete rabbit.jumps;

// alert( rabbit.jumps ); // ? (2)

// delete animal.jumps;

// alert( rabbit.jumps ); // ? (3)

// true, берётся из rabbit.
// null, берётся из animal.
// undefined, такого свойства больше нет.


// ?Задача состоит из двух частей.

// ?У нас есть объекты:

// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3
// };

// let bed = {
//   sheet: 1,
//   pillow: 2
// };

// let pockets = {
//   money: 2000
// };

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

console.log( pockets.pen ); // 3
console.log( bed.glasses ); // 1
console.log(table.money); // undefined


//? Объект rabbit наследует от объекта animal.

// ?Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit ?

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

// Ответ: rabbit.

// Поскольку this – это объект, который стоит перед точкой, rabbit.eat() изменяет объект rabbit.

// Поиск свойства и исполнение кода – два разных процесса.Сначала осуществляется поиск метода rabbit.eat в прототипе, а затем этот метод выполняется с this = rabbit.


// !Встроенные прототипы============================================

// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// После этого должен работать такой код:

// function f() {
//   alert("Hello!");
// }

// f.defer(1000); // выведет "Hello!" через 1 секунду

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду


// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

//Например, должно работать так:


Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
};

// check it
function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

// !Методы прототипов, объекты без свойства __proto__============================

// Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ / значение.

// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой.Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

// Вот так это должно работать:

let dictionary = Object.create(null);

// ваш код, который добавляет метод dictionary.toString

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"

//*решение(Сверху)
// let dictionary = Object.create(null, {
//   toString: { // определяем свойство toString
//     value() { // значение -- это функция
//       return Object.keys(this).join();
//     }
//   }
// });