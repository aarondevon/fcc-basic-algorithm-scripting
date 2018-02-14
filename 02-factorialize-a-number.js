/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

/*
factorialize(5) should return a number.
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1
*/

// reverse loop solution
function factorialize(num) {
  if (num === 0) {
    return 1;
  } 
  for (let i = num - 1; i > 0; i--) {
    console.log(num);
    // console.log(i);
    num *= i;
  }
  return num;
}

factorialize(5);

// normal loop solution
function factorialize(num) {
  if (num === 0) {
    return 1;
  } 
  let factorial = num;
  for (let i = 1; i < num; i++) {
    console.log(i);
    factorial *= i;
  }
  return factorial;
}

factorialize(5);