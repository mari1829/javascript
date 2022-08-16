let n = parseInt(prompt("Give The Value"));
let sum = 0;
let rem;
while (n > 0) {

  rem = n % 10;
  n = n / 10;
  n = parseInt(n);
  sum = sum + rem;
 
}
console.log(sum);
