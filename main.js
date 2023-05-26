function factorial() {
  let i = 1;
  let f = 1
  for (i = 1; i <= display.value; i++) f *= i
  display.value = f
}

let equal = document.querySelector('.equal');
let operator = document.querySelectorAll('#button')
let answer = document.querySelector('.answer')
console.log(operator)
equal.addEventListener('click', function handleClick() {
  let arrayOfAnswers = []
  arrayOfAnswers.push(display.value)
  console.log(arrayOfAnswers)
  answer.addEventListener('click', show)
  function show () {
    display.value = arrayOfAnswers.pop()
  }
});

operator.forEach(value => {
  value.addEventListener('click', function handleClick() {
  let arrayOfAnswers = []
  arrayOfAnswers.push(display.value)
  console.log(operator)
  answer.addEventListener('click', show)

  function show() {
    display.value = arrayOfAnswers.pop()
  }
})
})
