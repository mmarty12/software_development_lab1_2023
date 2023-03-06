"use strict";

import { Calculate } from "./main.js";
import { readFileSync, existsSync } from "fs";

const formatChecker = (data) =>
  /^-?\d+(\.\d+)? -?\d+(\.\d+)? -?\d+(\.\d+)?\r?\n$/g.test(data);

const FileMode = () => {
  const path = process.argv[2];
  if (!existsSync(path)) {
    console.log(`File does not exist!`);
    process.exit(1);
  }
  const file = readFileSync(path).toString();
  if (!formatChecker(file)) {
    console.log("Invalid file format!");
    process.exit(1);
  }
  const [a, b, c] = file
    .split("\n")[0]
    .split(" ")
    .map((string) => parseFloat(string));
  if (a === 0) {
    console.log("Error. a cannot be 0");
    process.exit(1);
  }
  console.log(Calculate(a, b, c));
};

export { FileMode };
