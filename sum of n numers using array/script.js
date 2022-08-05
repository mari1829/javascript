let a = [];
b = 0;
n = parseInt(prompt("Enter the Terms"));
for (i = 0; i < n; i++) {
    a[i] = parseInt(prompt("Enter the value:"));
    sum = a[i] + b;
    b = sum;
}
console.log(a);
console.log(b);