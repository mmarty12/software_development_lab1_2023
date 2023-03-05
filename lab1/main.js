"use strict";

let isValid = true;

function Validate(a, b, c) {
  if (a === 0) {
    console.log(`Error! No valid parameters! Expected a valid instead.`);
    isValid = false;
    return isValid;
  }
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log(`Error! No valid parameters! Expected a valid one instead.`);
    isValid = false;
    return isValid;
  }
}

function Calculate(a, b, c) {
  const descr = Math.pow(b, 2) - 4 * a * c;
  if (descr === 0) {
    const x = -b / (2 * a);
    console.log(
      `Equation to solve: (${a}) x^2 + (${b}) x + (${c}) = 0.\nThere is 1 root:\nx = ${x.toFixed(
        2
      )}.`
    );
  } else if (descr > 0) {
    let x1 = (-b + Math.sqrt(descr)) / (2 * a);
    let x2 = (-b - Math.sqrt(descr)) / (2 * a);
    console.log(
      `Equation to solve: (${a}) x^2 + (${b}) x + (${c}) = 0.\nx1 = ${x1.toFixed(
        2
      )};\nx2 = ${x2.toFixed(2)}.`
    );
  } else if (descr < 0) {
    console.log(
      `Equation to solve: (${a}) x^2 + (${b}) x + (${c}) = 0.\nThere are 0 roots.`
    );
  }
}

function Solve(a, b, c) {
  Validate(a, b, c);
  if (isValid === true) {
    Calculate(a, b, c);
  } else return;
}
