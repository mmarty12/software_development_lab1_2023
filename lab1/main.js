"use strict";

let isValid = true;

export const Validate = (data) => {
  const num = parseFloat(data.toString());
  if (isNaN(num) || data.toString().trim().length !== num.toString().length) {
    isValid = false;
    return isValid;
  } else {
    isValid = true;
    return isValid;
  }
};

export function Calculate(a, b, c) {
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
