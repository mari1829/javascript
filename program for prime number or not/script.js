let n = parseInt(prompt("Give The Value:"));
let s=0;
for (i = 2; i<n; i++) {
  if (n % i == 0) {
    
    s=1
    break;
  }
}
  if(s==1){
    console.log(" Not a prime number");

  }
   else {
    console.log(" prime number");
  }

