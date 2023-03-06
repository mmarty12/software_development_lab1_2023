"use strict";

import { Interactive } from "./interactiveMode.js";
import { FileMode } from "./fileMode.js";

if (!process.argv[2]) {
  Interactive();
} else {
  FileMode();
}
