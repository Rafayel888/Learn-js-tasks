// !=========================Функции===================

// ?Следующая функция возвращает true, если параметр age больше 18.
//?В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
//* Будет ли эта функция работать как-то иначе, если убрать else?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');//если код состоит из одной строки Можно не использовать.
}


// ?Следующая функция возвращает true, если параметр age больше 18.
//?В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
// *Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
//*Сделайте два варианта функции checkAge: Используя оператор ? ,Используя оператор ||

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?')
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?')
}

// ?Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
//?Пример вызовов:

function min(a,b) {
  return (a>b) ? b:a;
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// ?Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
//?pow(3, 2) = 3 * 

function pow(x, y) {
  x = prompt('x?', '');
  y = prompt('y?', '');
  console.log(x ** y);
}
pow()


// !=====Стрелочные функции, основы=======

// ?Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function () { console.log("Вы согласились."); },
  function () { console.log("Вы отменили выполнение."); }
);

ask("Вы согласны?",
  () => console.log("Вы согласились."),
  () => console.log("Вы отменили выполнение.")
  )