let n = parseInt(prompt("Give The Value"));
let sum = 0;
let rem;
while (n >=1) {
    rem = n % 10;
    sum = rem**3 + sum;
    n = n / 10;
    n = parseInt(n);
   
}
console.log(sum);
