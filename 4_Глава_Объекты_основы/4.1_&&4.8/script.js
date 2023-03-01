// !(4.1) Объекты===================================================================================
// ?Напишите код, выполнив задание из каждого пункта отдельной строкой:
// ?Создайте пустой объект user.
// ?Добавьте свойство name со значением John.
// ?Добавьте свойство surname со значением Smith.
// ?Измените значение свойства name на Pete.
// ?Удалите свойство name из объекта.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// ?Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//?Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// ?Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// const user = {
//   name: "John"
// };

// это будет работать?
// user.name = "Pete";

// *это сработает

// ?У нас есть объект, в котором хранятся зарплаты нашей команды:
// ?Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// ?Если объект salaries пуст, то результат должен быть 0.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390

// ?Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// ?Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// ?P.S. Используйте typeof для проверки, что значение свойства числовое.
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };


function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

// !(4.4)Методы объекта, "this"==========================================================================

// ?Здесь функция makeUser возвращает объект.
//?Каким будет результат при обращении к свойству объекта ref? Почему?

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// console.log( user.ref.name ); // Каким будет результат?

// *ошибка. property 'name' of undefined

// ?Создайте объект calculator (калькулятор) с тремя методами:

// ?read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// ?sum() (суммировать) возвращает сумму сохранённых значений.
// ?mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// !(4.5)Конструктор, оператор "new"======================================================================

//? Возможно ли создать функции A и B, чтобы new A() == new B() ?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert(a == b); // true

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert(new A() == new B()); // true

// ?Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// ?read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
  // ?sum() возвращает сумму этих свойств.
    //? mul() возвращает произведение этих свойств.

function Calculator() {

  this.read = function () {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator_2 = new Calculator();
calculator_2.read();

alert("Sum=" + calculator_2.sum());
alert("Mul=" + calculator_2.mul());