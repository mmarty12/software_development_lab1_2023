**Lab 1: Quadric Equation Solver via interactive and non-interactive modes.**
---
## Usage
**Interactive Mode:**

Here you can enter 3 values (for a, b, and c). Then the created equation with the x1-x2 result will be displayed.

- First run the file run.js
```
npm run.js
```
- Then enter the values for a, b, and c. 

- **NOTE** In case a = 0, the application will throw and error that looks like this:
```
a = 0
Error! a cannot be 0.
a =
```
- **NOTE** In case the parameter is not a number, the application will throw and error that looks like this:
```
b = ghlhfl
Error! No valid parameters! Expected a valid one instead.
b =
```
- If everything is correct, the application will display the created equation together with the x1-x2 result. Every value is rounded up to 2 digits after the decimal point.
```
a = 2
b = 1
c = -3
Equation to solve: (2) x^2 + (1) x + (-3) = 0.
x1 = 1.00;
x2 = -1.50.
```

**File Mode (non-interactive):**

Here the quadric equation is solved with parameters from the file. In the directory there are two test files. file1.txt has all valid parameters; file2.txt displays a possible error.

- First run the file run.js together with the desired txt-file. For example:
```
node run.js file1.txt 
```
- In this case you will get:
```
Equation to solve: (2) x^2 + (1) x + (-3) = 0.
x1 = 1.00;
x2 = -1.50.
```
- **NOTE** In case of running the file2.txt, the application will throw an error:
```
node run.js file2.txt 
Error. a cannot be 0
```
- **NOTE** In case of running the wrong file path, the application will throw another error:
```
node run.js dpfdpfpdfp.txt
File does not exist!
```
---
## Revert commit
