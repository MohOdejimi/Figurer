function factorial() {
  let i = 1;
  let f = 1
  for (i = 1; i <= display.value; i++) f *= i
  display.value = f
}

let equal = document.querySelector('.equal');

let answer = document.querySelector('.answer')

equal.addEventListener('click', function handleClick() {
  let arrayOfAnswers = []
  arrayOfAnswers.push(display.value)

  answer.addEventListener('click', show)
  function show () {
    display.value = arrayOfAnswers.pop()
  }
});

