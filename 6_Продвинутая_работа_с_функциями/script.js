// !1)Рекурсия и стек============================================

// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к.sumTo(n) = n + sumTo(n - 1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:

// function sumTo(n) { /*... ваш код ... */ }

// alert(sumTo(100)); // 5050
// P.S.Какой вариант решения самый быстрый ? Самый медленный ? Почему ?

//   P.P.S.Можно ли при помощи рекурсии посчитать sumTo(100000) ?

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100));


function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log(sumTo(100));

function sumTo(n) {
  return n * (n + 1) / 2;
}

console.log(sumTo(100));


// ?Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// ?Определение факториала можно записать как:

// function factorial(n) {
//   return n ? n * factorial(n - 1) : 1;
// }

// alert(factorial(5)); // 120


// Последовательность чисел Фибоначчи определяется формулой Fn = Fn - 1 + Fn - 2. То есть, следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1 + 1), затем 3(1 + 2), 5(2 + 3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

// Напишите функцию fib(n) которая возвращает n - е число Фибоначчи.

// Пример работы:


// function fib(n) { /* ваш код */ }
// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757


// ?Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без ?

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {

//   alert(list.value); // выводим текущий элемент

//   if (list.next) {
//     printList(list.next); // делаем то же самое для остальной части списка
//   }

// }

// printList(list);

// ?Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// ?Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  alert(list.value);
}

printReverseList(list);


// !2 Объект функции, NFE=======================================

// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение(как и раньше).
//   counter.set(value) должен устанавливать счётчику значение value.
//     counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

//   P.S.Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции.Или сделать два варианта решения: и так, и так.

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

// ?Напишите функцию sum, которая бы работала следующим образом:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

// !3 Планирование: setTimeout и setInterval

// ?Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// ?Сделайте два варианта решения.
// ?Используя setInterval.
// ?Используя рекурсивный setTimeout.


// рекурсивный setTimeout:
function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// использование:
printNumbers(5, 10);

// В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.
// Когда будет выполнена запланированная функция ?

//   После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет log ?


// let i = 0;

// setTimeout(() => alert(i), 100); // ?

// // предположим, что время выполнения этой функции >100 мс
// for (let j = 0; j < 100000000; j++) {
//   i++;
// }

let i = 0;

setTimeout(() => alert(i), 100); // 100000000

// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
  i++;
}

// !Декораторы и переадресация вызова, call/apply===================

// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.

//   Например:

// function work(a, b) {
//   alert(a + b); // произвольная функция или метод
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert('call:' + args.join()); // "call:1,2", "call:4,5"
// }

function spy(func) {

  function wrapper(...args) {
    // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}


// ?Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

// function f(x) {
//   alert(x);
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

function delay(f, ms) {

  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

let f1000 = delay(alert, 1000);

f1000("test"); // показывает "test" после 1000 мс


// ?Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.


// let f = debounce(alert, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout(() => f(4), 1100); // выполняется
// setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)


function debounce(f, ms) {

  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}