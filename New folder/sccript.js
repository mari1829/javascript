let a = [1, 28, 32, 4, 5, 6,7, 8, 9];
let s = 0;
let b;
for (i = 0; i < a.length; i++) {
  b = a[i] + s;
  s = b;
}
console.log(b);
