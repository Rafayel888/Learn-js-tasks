//!(3.2)Советы по стилю кода========================================================
// ?Какие недостатки вы видите в стиле написания кода этого примера?

// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }

// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
// }
// else
// {
//   alert(pow(x,n))
// }


function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
     result *= x; 
    }
    
  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n <= 0) {
  console.log(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else {
  console.log(pow(x, n))
}

// !(3.5)Автоматическое тестирование c использованием фреймворка Mocha=========================================

// ?Что не так в нижеприведённом тесте функции pow?

// it("Возводит x в степень n", function () {
//   let x = 5;

//   let result = x;
//   assert.equal(pow(x, 1), result);

//   result *= x;
//   assert.equal(pow(x, 2), result);

//   result *= x;
//   assert.equal(pow(x, 3), result);
// });

describe("Возводит x в степень n", function () {
  it("5 в степени 1 будет 5", function () {
    assert.equal(pow(5, 1), 5);
  });

  // Mocha будет запускать только этот блок
  it.only("5 в степени 2 будет 25", function () {
    assert.equal(pow(5, 2), 25);
  });

  it("5 в степени 3 будет 125", function () {
    assert.equal(pow(5, 3), 125);
  });
});

