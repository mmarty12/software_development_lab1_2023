"use strict";

import { Validate, Calculate } from "./main.js";

export const Interactive = () => {
  const values = [];
  const parameters = ["a = ", "b = ", "c = "];

  process.stdin.on("data", (data) => {
    const parsed = parseFloat(data.toString());
    values[values.length] = parsed;
    if (!Validate(data)) {
      console.log(`Error! No valid parameters! Expected a valid one instead.`);
      process.stdout.write(parameters[values.length]);
      values.pop();
    } else if (values[0] === 0) {
      console.log(`Error! a cannot be 0.`);
      values.pop();
      process.stdout.write(parameters[values.length]);
    } else {
      if (values.length < parameters.length) {
        process.stdout.write(parameters[values.length]);
      } else {
        Calculate(...values);
        process.exit(0);
      }
    }
  });
  process.stdout.write(parameters[0]);
};
