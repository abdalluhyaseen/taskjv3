for (let i = 1; i <= 10; i++) {
  document.write(i);
}
document.writeln("<br>");
// #############################################
// task 2

let i = 1;
while (i <= 10) {
  document.write(i);
  i++;
}
document.writeln("<br>");
// #############################################
// task 3
let number = [1, 2, 3, 4, 5];
for (i = 0; i < number.length; i++) {
  document.write(number[i]);
}
document.writeln("<br>");
// #############################################
// task 4
for (let n = 0; n <= 10; n += 2) {
  document.write(n);
}
document.writeln("<br>");
// #############################################
// task 5
var Sum = 0;
for (i = 1; i <= 10; i++) {
  Sum = Sum + i;
}
document.write(Sum);
document.writeln("<br>");
// #############################################
// task 6
let num = [1, 2, 3, 4, 5];
let largest = num[0];
for (i = 0; i < num.length; i++) {
  if (num[i] > largest) {
    largest = num[i];
  }
}
document.write(largest);

document.writeln("<br>");
// #############################################
// task 7
let num1 = [5, 4, 3, 2, 1];
let smallest = num[0];
for (i = 0; i < 5; i++) {
  if (num[i] < smallest) {
    smallest = num[i];
  }
}
document.write(smallest);

document.writeln("<br>");
// #############################################
// task 11
let array = [1, 2, 3, 4, 5];
let sum = 0;
for (x = 0; x < 5; x++) {
  sum = sum + array[x];
}
let Avarage = sum / 5;
document.write(Avarage);
document.writeln("<br>");
// #############################################
// task 12
var factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial = factorial * i;
}
document.write(factorial);
document.writeln("<br>");
// #############################################
// task 13
for (let n = 2; n < 20; n++) {
  let Prime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      Prime = false;
      break;
    }
  }

  if (Prime) {
    document.writeln(n);
  }
}
document.writeln("<br>");

// #############################################
// task 14
let number1 = 5;

for (let i = 1; i <= 10; i++) {
  document.write(number1 + " * " + i + " = " + number1 * i + "<br>");
}
// #############################################
// task 15

for (let i = 1; i <= 5; i += 2) {
  document.write(i);
}
document.writeln("<br>");
// #############################################
// task 16
let s =[1,2,3,4,5];
for(let i=5;i>0; i--) {
    document.writeln(i);
  }
document.writeln("<br>");
// #############################################
// task 17
let f = 3;
let c = 8;
let n = [3, 4, 5, 6, 7 ,8];
for (let i = 0; i < n.length; i++) {
  if (i>=f && i<c) {
    document.writeln(i);
  }
}
document.writeln("<br>");
// #############################################
// task 18

let num2 = 4;
for (let i = 1; i <= 5; i++) {
  if (num2 == i) {
    document.write(true);
   
  }
}
document.writeln("<br>");

// #############################################
// task 19
let num3 = [1,2,1,3,2,1];
let frequency = 0;
 for (let i = 0; i < num3.length; i++) {
   if (num3[i] == 1) {
     frequency++;
   }
 }
document.write(frequency);
document.writeln("<br>");
// #############################################
// task 20
let ba = 1;
let ab = 0;
sum = 0;
for (let i = 2; i <9; i++) {
  document.writeln(ab);
  sum = ab + ba;
  ab = ba;
  ba = sum;
}