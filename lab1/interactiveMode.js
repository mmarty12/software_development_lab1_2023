"use strict";

import { Validate, Calculate } from "./main.js";

export const Interactive = () => {
  const values = [];
  const parameters = ["a = ", "b = ", "c = "];

  process.stdin.on("data", (data) => {
    const parsed = parseFloat(data.toString());
    const parsedNew = delete parsed[0];
    if (!Validate(data) || parsedNew === 0) {
      console.log(`Error! No valid parameters! Expected a valid one instead.`);
      process.stdout.write(parameters[values.length]);
    } else {
      values[values.length] = parsed;
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
