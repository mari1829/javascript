let a = parseInt(prompt("Give The Value"));
let c = 1;
let b;
for (i = 1; i <= a; i++) {
  b = i * c;
  c = b;
}

console.log(c);
